
# Wiedza i Życie - Scraper

___________________________

checkout rc branch

### Prerequisites

* pip
* python3
* virtualenv
* (for use of mallet install default-jdk)
___________________________

### Installation

in bash run following command

```bash
make install
```
___________________________

### Building Command

in order to build the command for scraper run:

```bash
python setup.py develop
```
___________________________

### To see all available CLI commands


```bash
scraper --help
```
___________________________

### To scrape all available editions

```bash
source env.sh && \
scraper scrape-all-and-save
```
___________________________

### To scrape all particular edition (for debugging)

```bash
source env.sh && \
scraper scrape-edition https://www.wiz.pl/10,274.html
```
___________________________

### To scrape all particular article (for debugging)

```bash
source env.sh && \
scraper scrape-article https://www.wiz.pl/8,2116.html
```


# Machine Learning Text Analisys
___________________________


### Run_analisys

```bash
source env.sh && \
scraper run_analisys
```

### Visualize

```bash
source env.sh && \
scraper make_pyDavis_visualization
```

### Check Lengths

```bash
source env.sh && \
scraper print_document_lengths
```

### Histogram Lengths

```bash
source env.sh && \
scraper print_document_lengths
```

### Check Model

```bash
source env.sh && \
scraper model_perplexity_and_coherence
```

### Reset Dataframe

```bash
source env.sh && \
scraper print_document_lengths
```

cli.add_command(run_analisys)


# Angular Visualization


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

