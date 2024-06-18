### Roster Details<br />
Team Name: Case<br />
Roster: nyezin, RCF, RICIOLI, urban0, yepz<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [117](../standings_global.md)<br />
Regional Rank: [29]( ../standings_americas.md)<br />
Final Rank Value:  813.2<br />
<br />
Final Rank Value (813.2) = Starting Rank Value (872.1) + Head To Head Adjustments (-58.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.1
- 400 + ( ( 0.232 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 872.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           83 |      315 | 2024-06-08 | Galorys        | L   | 1.000      | -            | -                | -                | -         |   -15.43 | nyezin, RCF, RICIOLI, urban0, yepz |
|           82 |      364 | 2024-06-07 | Vikings KR     | L   | 1.000      | -            | -                | -                | -         |   -20.86 | nyezin, RCF, RICIOLI, urban0, yepz |
|           81 |      398 | 2024-06-06 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -18.27 | nyezin, RCF, RICIOLI, urban0, yepz |
|           80 |      436 | 2024-06-06 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |   -19.88 | nyezin, RCF, RICIOLI, urban0, yepz |
|           79 |      558 | 2024-06-03 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -15.94 | nyezin, RCF, RICIOLI, urban0, yepz |
|           78 |      607 | 2024-06-01 | ex-2GAME       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.11 | nyezin, RCF, RICIOLI, urban0, yepz |
|           77 |      694 | 2024-05-29 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.52 | nyezin, RCF, RICIOLI, urban0, yepz |
|           76 |      746 | 2024-05-27 | Hawks          | L   | 1.000      | -            | -                | -                | -         |   -27.61 | nyezin, RCF, RICIOLI, urban0, yepz |
|           75 |      841 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -8.03 | nyezin, RCF, RICIOLI, urban0, yepz |
|           74 |      845 | 2024-05-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |    -8.60 | nyezin, RCF, RICIOLI, urban0, yepz |
|           73 |      884 | 2024-05-21 | Sharks         | W   | 1.000      | 0.450        | 0.044 (0.020)    | 0.429 (0.193)    | 0 (0.000) |    20.82 | nyezin, RCF, RICIOLI, urban0, yepz |
|           72 |      885 | 2024-05-21 | Sharks         | L   | 1.000      | -            | -                | -                | -         |   -10.28 | nyezin, RCF, RICIOLI, urban0, yepz |
|           71 |      894 | 2024-05-21 | ODDIK          | W   | 1.000      | 0.303        | 0.040 (0.012)    | 0.558 (0.169)    | 0 (0.000) |    17.50 | nyezin, RCF, RICIOLI, urban0, yepz |
|           70 |      933 | 2024-05-20 | Galorys        | W   | 1.000      | 0.303        | -                | 0.517 (0.157)    | 0 (0.000) |    14.74 | nyezin, RCF, RICIOLI, urban0, yepz |
|           69 |      951 | 2024-05-19 | ODDIK          | L   | 1.000      | -            | -                | -                | -         |   -13.18 | nyezin, RCF, RICIOLI, urban0, yepz |
|           68 |      979 | 2024-05-18 | Solid          | W   | 0.997      | 0.303        | 0.051 (0.015)    | 0.566 (0.171)    | 0 (0.000) |    15.59 | nyezin, RCF, RICIOLI, urban0, yepz |
|           67 |     1016 | 2024-05-17 | Fluxo          | L   | 0.990      | -            | -                | -                | -         |    -5.65 | nyezin, RCF, RICIOLI, urban0, yepz |
|           66 |     1022 | 2024-05-17 | Hype           | W   | 0.989      | -            | -                | -                | 0 (0.000) |    11.92 | nyezin, RCF, RICIOLI, urban0, yepz |
|           65 |     1055 | 2024-05-16 | KRÜ            | W   | 0.983      | 0.371        | 0.024 (0.009)    | -                | 0 (0.000) |    14.29 | nyezin, RCF, RICIOLI, urban0, yepz |
|           64 |     1063 | 2024-05-16 | Yawara         | W   | 0.982      | -            | -                | -                | 0 (0.000) |     3.61 | nyezin, RCF, RICIOLI, urban0, yepz |
|           63 |     1101 | 2024-05-15 | Corinthians    | W   | 0.977      | -            | -                | -                | 0 (0.000) |     8.23 | nyezin, RCF, RICIOLI, urban0, yepz |
|           62 |     1103 | 2024-05-15 | Corinthians    | W   | 0.976      | -            | -                | -                | -         |     8.81 | nyezin, RCF, RICIOLI, urban0, yepz |
|           61 |     1110 | 2024-05-15 | Galorys        | W   | 0.976      | 0.371        | -                | 0.517 (0.187)    | -         |    16.92 | nyezin, RCF, RICIOLI, urban0, yepz |
|           60 |     1151 | 2024-05-14 | Galorys        | W   | 0.971      | 0.450        | 0.023 (0.010)    | 0.517 (0.226)    | -         |    18.32 | nyezin, RCF, RICIOLI, urban0, yepz |
|           59 |     1155 | 2024-05-14 | Galorys        | L   | 0.970      | -            | -                | -                | -         |   -12.04 | nyezin, RCF, RICIOLI, urban0, yepz |
|           58 |     1168 | 2024-05-14 | Hype           | L   | 0.969      | -            | -                | -                | -         |   -17.34 | nyezin, RCF, RICIOLI, urban0, yepz |
|           57 |     1190 | 2024-05-13 | Intense        | W   | 0.963      | -            | -                | -                | -         |     5.10 | nyezin, RCF, RICIOLI, urban0, yepz |
|           56 |     1218 | 2024-05-12 | Solid          | L   | 0.956      | -            | -                | -                | -         |   -12.71 | nyezin, RCF, RICIOLI, urban0, yepz |
|           55 |     1251 | 2024-05-11 | Galorys        | L   | 0.949      | -            | -                | -                | -         |   -14.57 | nyezin, RCF, RICIOLI, urban0, yepz |
|           54 |     1329 | 2024-05-07 | inSanitY       | L   | 0.923      | -            | -                | -                | -         |   -15.43 | nyezin, RCF, RICIOLI, urban0, yepz |
|           53 |     1357 | 2024-05-05 | ODDIK          | L   | 0.911      | -            | -                | -                | -         |   -10.94 | nyezin, RCF, RICIOLI, urban0, yepz |
|           52 |     1416 | 2024-05-02 | ODDIK          | W   | 0.891      | 0.450        | 0.040 (0.016)    | 0.558 (0.224)    | -         |    17.72 | nyezin, RCF, RICIOLI, urban0, yepz |
|           51 |     1417 | 2024-05-02 | ODDIK          | L   | 0.890      | -            | -                | -                | -         |   -10.17 | nyezin, RCF, RICIOLI, urban0, yepz |
|           50 |     1441 | 2024-05-01 | 9z             | L   | 0.883      | -            | -                | -                | -         |    -0.50 | nyezin, RCF, RICIOLI, urban0, yepz |
|           49 |     1443 | 2024-05-01 | 9z             | L   | 0.883      | -            | -                | -                | -         |    -0.50 | nyezin, RCF, RICIOLI, urban0, yepz |
|           48 |     1817 | 2024-04-17 | MIBR           | L   | 0.790      | -            | -                | -                | -         |    -0.42 | RCF, RICIOLI, snow, urban0, yepz   |
|           47 |     1854 | 2024-04-16 | Galorys        | W   | 0.784      | -            | -                | -                | -         |    13.21 | RCF, RICIOLI, snow, urban0, yepz   |
|           46 |     1905 | 2024-04-13 | MIBR           | L   | 0.763      | -            | -                | -                | -         |    -0.41 | pr1sma, RCF, RICIOLI, urban0, yepz |
|           45 |     1918 | 2024-04-12 | adalYamigos    | W   | 0.758      | -            | -                | -                | -         |     8.30 | RCF, RICIOLI, snow, urban0, yepz   |
|           44 |     1953 | 2024-04-11 | FURIA Academy  | W   | 0.748      | -            | -                | -                | -         |     3.82 | RCF, RICIOLI, snow, urban0, yepz   |
|           43 |     2026 | 2024-04-09 | paiN           | L   | 0.737      | -            | -                | -                | -         |    -0.38 | RCF, RICIOLI, snow, urban0, yepz   |
|           42 |     2032 | 2024-04-09 | paiN           | L   | 0.737      | -            | -                | -                | -         |    -0.38 | RCF, RICIOLI, snow, urban0, yepz   |
|           41 |     2103 | 2024-04-07 | adalYamigos    | L   | 0.725      | -            | -                | -                | -         |   -15.16 | RCF, RICIOLI, snow, urban0, yepz   |
|           40 |     2165 | 2024-04-04 | RED Canids     | W   | 0.704      | 0.450        | 0.115 (0.036)    | 0.693 (0.220)    | -         |    18.98 | RCF, RICIOLI, snow, urban0, yepz   |
|           39 |     2168 | 2024-04-04 | RED Canids     | L   | 0.704      | -            | -                | -                | -         |    -3.06 | RCF, RICIOLI, snow, urban0, yepz   |
|           38 |     2204 | 2024-04-03 | Imperial       | L   | 0.697      | -            | -                | -                | -         |    -0.49 | RCF, RICIOLI, snow, urban0, yepz   |
|           37 |     2207 | 2024-04-03 | Imperial       | L   | 0.697      | -            | -                | -                | -         |    -0.50 | RCF, RICIOLI, snow, urban0, yepz   |
|           36 |     2338 | 2024-03-27 | MIBR           | L   | 0.651      | -            | -                | -                | -         |    -0.38 | RCF, RICIOLI, snow, urban0, yepz   |
|           35 |     2344 | 2024-03-27 | MIBR           | L   | 0.651      | -            | -                | -                | -         |    -0.38 | RCF, RICIOLI, snow, urban0, yepz   |
|           34 |     2514 | 2024-03-17 | ODDIK          | L   | 0.583      | -            | -                | -                | -         |    -6.42 | RCF, RICIOLI, snow, urban0, yepz   |
|           33 |     2538 | 2024-03-16 | MIBR Academy   | W   | 0.576      | -            | -                | -                | -         |     3.99 | RCF, RICIOLI, snow, urban0, yepz   |
|           32 |     2553 | 2024-03-15 | RED Canids     | L   | 0.570      | -            | -                | -                | -         |    -2.99 | RCF, RICIOLI, snow, urban0, yepz   |
|           31 |     2593 | 2024-03-14 | FURIA Academy  | W   | 0.563      | -            | -                | -                | -         |     2.87 | RCF, RICIOLI, snow, urban0, yepz   |
|           30 |     2612 | 2024-03-13 | RED Canids     | L   | 0.557      | -            | -                | -                | -         |    -2.77 | RCF, RICIOLI, snow, urban0, yepz   |
|           29 |     2622 | 2024-03-13 | Yawara         | L   | 0.556      | -            | -                | -                | -         |   -15.47 | RCF, RICIOLI, snow, urban0, yepz   |
|           28 |     2626 | 2024-03-13 | ODDIK          | L   | 0.556      | -            | -                | -                | -         |    -6.68 | RCF, RICIOLI, snow, urban0, yepz   |
|           27 |     2662 | 2024-03-12 | LA RUGONETA    | W   | 0.548      | -            | -                | -                | -         |     3.09 | RCF, RICIOLI, snow, urban0, yepz   |
|           26 |     2691 | 2024-03-10 | FURIA Academy  | W   | 0.537      | -            | -                | -                | -         |     2.37 | RCF, RICIOLI, snow, urban0, yepz   |
|           25 |     2711 | 2024-03-09 | Sharks         | W   | 0.530      | 0.435        | 0.044 (0.010)    | -                | -         |    11.31 | RCF, RICIOLI, snow, urban0, yepz   |
|           24 |     2761 | 2024-03-07 | Fluxo          | W   | 0.517      | 0.435        | 0.159 (0.036)    | 0.627 (0.141)    | -         |    12.59 | RCF, RICIOLI, snow, urban0, yepz   |
|           23 |     2823 | 2024-03-05 | adalYamigos    | L   | 0.504      | -            | -                | -                | -         |   -11.24 | RCF, RICIOLI, snow, urban0, yepz   |
|           22 |     2825 | 2024-03-05 | adalYamigos    | L   | 0.504      | -            | -                | -                | -         |   -11.65 | RCF, RICIOLI, snow, urban0, yepz   |
|           21 |     2853 | 2024-03-04 | Fluxo          | L   | 0.498      | -            | -                | -                | -         |    -3.78 | RCF, RICIOLI, snow, urban0, yepz   |
|           20 |     2854 | 2024-03-04 | Fluxo          | L   | 0.497      | -            | -                | -                | -         |    -3.90 | RCF, RICIOLI, snow, urban0, yepz   |
|           19 |     3030 | 2024-02-24 | ex-2GAME       | W   | 0.437      | -            | -                | -                | -         |     4.03 | RCF, RICIOLI, snow, urban0, yepz   |
|           18 |     3037 | 2024-02-24 | ex-2GAME       | L   | 0.437      | -            | -                | -                | -         |    -9.96 | RCF, RICIOLI, snow, urban0, yepz   |
|           17 |     3090 | 2024-02-21 | Solid          | W   | 0.418      | 0.450        | 0.051 (0.010)    | 0.566 (0.106)    | -         |     6.96 | RCF, RICIOLI, snow, urban0, yepz   |
|           16 |     3091 | 2024-02-21 | Solid          | L   | 0.418      | -            | -                | -                | -         |    -6.33 | RCF, RICIOLI, snow, urban0, yepz   |
|           15 |     3098 | 2024-02-21 | Sharks         | L   | 0.417      | -            | -                | -                | -         |    -4.99 | RCF, RICIOLI, snow, urban0, yepz   |
|           14 |     3127 | 2024-02-20 | 9z             | L   | 0.410      | -            | -                | -                | -         |    -0.21 | RCF, RICIOLI, snow, urban0, yepz   |
|           13 |     3130 | 2024-02-20 | W7M            | W   | 0.410      | -            | -                | -                | -         |     5.22 | RCF, RICIOLI, snow, urban0, yepz   |
|           12 |     3134 | 2024-02-20 | Sharks         | L   | 0.409      | -            | -                | -                | -         |    -4.85 | RCF, RICIOLI, snow, urban0, yepz   |
|           11 |     3174 | 2024-02-18 | Galorys        | L   | 0.397      | -            | -                | -                | -         |    -6.82 | RCF, RICIOLI, snow, urban0, yepz   |
|           10 |     3195 | 2024-02-17 | Solid          | W   | 0.391      | -            | -                | -                | -         |     6.24 | RCF, RICIOLI, snow, urban0, yepz   |
|            9 |     3219 | 2024-02-16 | BESTIA         | W   | 0.384      | -            | -                | -                | -         |     8.22 | RCF, RICIOLI, snow, urban0, yepz   |
|            8 |     3252 | 2024-02-15 | 9z             | L   | 0.377      | -            | -                | -                | -         |    -0.15 | RCF, RICIOLI, snow, urban0, yepz   |
|            7 |     3253 | 2024-02-15 | Sharks         | W   | 0.377      | -            | -                | -                | -         |     7.74 | RCF, RICIOLI, snow, urban0, yepz   |
|            6 |     3260 | 2024-02-15 | Flamengo       | W   | 0.376      | -            | -                | -                | -         |     1.36 | RCF, RICIOLI, snow, urban0, yepz   |
|            5 |     3281 | 2024-02-14 | O PLANO C      | W   | 0.371      | -            | -                | -                | -         |     0.74 | RCF, RICIOLI, snow, urban0, yepz   |
|            4 |     3324 | 2024-02-13 | W7M            | W   | 0.364      | -            | -                | -                | -         |     5.00 | RCF, RICIOLI, snow, urban0, yepz   |
|            3 |     3328 | 2024-02-13 | W7M            | L   | 0.364      | -            | -                | -                | -         |    -6.60 | RCF, RICIOLI, snow, urban0, yepz   |
|            2 |     3333 | 2024-02-13 | Galorys        | W   | 0.363      | -            | -                | -                | -         |     5.57 | RCF, RICIOLI, snow, urban0, yepz   |
|            1 |     3346 | 2024-02-12 | Dusty Roots    | W   | 0.356      | -            | -                | -                | -         |     3.61 | RCF, RICIOLI, snow, urban0, yepz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,918.01)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $600.00        | $600.00         |
| 2024-05-21 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-05-19 |      1.000 | $1,000.00      | $1,000.00       |
| 2024-03-14 |      0.564 | $5,000.00      | $2,818.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
