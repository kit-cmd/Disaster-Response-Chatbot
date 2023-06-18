FROM continuumio/anaconda3

WORKDIR /app

COPY conda_requirements.yaml /app
RUN conda env create -f conda_requirements.yaml

SHELL ["conda", "run", "-n", "diaster", "/bin/bash", "-c"]

COPY . /app

RUN ["conda", "run", "--no-capture-output", "-n", "diaster", "python", "chat_bot/get_docu_from_urls.py"]
RUN ["conda", "run", "--no-capture-output", "-n", "diaster", "python", "chat_bot/vector_store_from_docu.py"]

CMD ["conda", "run", "--no-capture-output", "-n", "diaster", "python", "chat_bot/chat_simulate.py"]