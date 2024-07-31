### Roster Details<br />
Team Name: Intense<br />
Roster: ckzao, diozera, fREQ, keiz, mxa<br />
Global Rank: [141](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
<br />
Final Rank Value:  731.7<br />
<br />
Final Rank Value (731.7) = Starting Rank Value (609.9) + Head To Head Adjustments (121.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.099[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.9
- 400 + ( ( 0.102 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 609.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       80 | 2024-07-29 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -5.67 | ckzao, diozera, fREQ, keiz, mxa |
|           22 |      118 | 2024-07-28 | Fluxo          | W   | 1.000      | 0.143        | 0.123 (0.018)    | 0.685 (0.098)    | 0 (0.000) |    28.65 | ckzao, diozera, fREQ, keiz, mxa |
|           21 |      280 | 2024-07-23 | Vikings KR     | W   | 1.000      | 0.371        | 0.008 (0.003)    | 0.458 (0.170)    | 0 (0.000) |    21.42 | ckzao, diozera, fREQ, keiz, mxa |
|           20 |      306 | 2024-07-22 | Case           | L   | 1.000      | -            | -                | -                | -         |    -7.45 | ckzao, diozera, fREQ, keiz, mxa |
|           19 |      356 | 2024-07-20 | inSanitY       | L   | 1.000      | -            | -                | -                | -         |    -4.10 | ckzao, diozera, fREQ, keiz, mxa |
|           18 |      399 | 2024-07-19 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |    -1.93 | ckzao, diozera, fREQ, keiz, mxa |
|           17 |      430 | 2024-07-18 | Bounty Hunters | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.471 (0.175)    | 0 (0.000) |    26.20 | ckzao, diozera, fREQ, keiz, mxa |
|           16 |      587 | 2024-07-16 | Galorys        | W   | 1.000      | 0.371        | 0.030 (0.011)    | 0.552 (0.205)    | 0 (0.000) |    22.23 | ckzao, diozera, fREQ, keiz, mxa |
|           15 |      663 | 2024-07-13 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -4.09 | ckzao, diozera, fREQ, keiz, mxa |
|           14 |      677 | 2024-07-12 | paiN Academy   | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.90 | ckzao, diozera, fREQ, keiz, mxa |
|           13 |      749 | 2024-07-08 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -3.41 | ckzao, diozera, fREQ, keiz, mxa |
|           12 |     1192 | 2024-06-07 | RED Canids     | L   | 0.839      | -            | -                | -                | -         |    -1.26 | ckzao, diozera, fREQ, keiz, mxa |
|           11 |     1391 | 2024-06-03 | Galorys        | W   | 0.813      | 0.371        | 0.030 (0.009)    | 0.552 (0.166)    | 0 (0.000) |    20.43 | ckzao, diozera, fREQ, keiz, mxa |
|           10 |     1467 | 2024-05-31 | Bounty Hunters | W   | 0.795      | 0.371        | 0.022 (0.006)    | 0.471 (0.139)    | 0 (0.000) |    20.25 | ckzao, diozera, fREQ, keiz, mxa |
|            9 |     1510 | 2024-05-30 | inSanitY       | L   | 0.785      | -            | -                | -                | -         |    -3.30 | ckzao, diozera, fREQ, keiz, mxa |
|            8 |     1544 | 2024-05-28 | FURIA Academy  | W   | 0.775      | 0.371        | 0.000 (0.000)    | 0.103 (0.030)    | 0 (0.000) |     9.63 | ckzao, diozera, fREQ, keiz, mxa |
|            7 |     2018 | 2024-05-13 | Case           | L   | 0.674      | -            | -                | -                | -         |    -3.75 | bsd, ckzao, diozera, fREQ, mxa  |
|            6 |     2040 | 2024-05-12 | ODDIK          | L   | 0.667      | -            | -                | -                | -         |    -2.41 | bsd, ckzao, diozera, fREQ, mxa  |
|            5 |     2115 | 2024-05-09 | RED Canids     | L   | 0.647      | -            | -                | -                | -         |    -1.19 | bsd, ckzao, diozera, fREQ, mxa  |
|            4 |     2144 | 2024-05-08 | Yawara         | W   | 0.639      | 0.435        | 0.000 (0.000)    | 0.049 (0.013)    | 0 (0.000) |     7.54 | bsd, ckzao, diozera, fREQ, mxa  |
|            3 |     2180 | 2024-05-06 | RED Canids     | L   | 0.625      | -            | -                | -                | -         |    -1.11 | bsd, ckzao, diozera, fREQ, mxa  |
|            2 |     3445 | 2024-03-13 | Fluxo          | L   | 0.267      | -            | -                | -                | -         |    -0.66 | bsd, ckzao, diozera, mxa, roz   |
|            1 |     4109 | 2024-02-14 | Fluxo          | L   | 0.081      | -            | -                | -                | -         |    -0.21 | bsd, ckzao, diozera, mxa, roz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
