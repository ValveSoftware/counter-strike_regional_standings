### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [90](../../standings_global_2024_09_26.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_26.md)<br />
Regional Rank: [66]( ../../standings_europe_2024_09_26.md)<br />
<br />
Final Rank Value:  868.1<br />
<br />
Final Rank Value (868.1) = Starting Rank Value (821.0) + Head To Head Adjustments (47.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.0
- 400 + ( ( 0.223 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 821.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1148 | 2024-08-23 | Insilio           | L   | 0.972      | -            | -                | -                | -         |   -14.68 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |     1178 | 2024-08-22 | BIG               | L   | 0.965      | -            | -                | -                | -         |    -2.87 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |     1206 | 2024-08-21 | SAW               | L   | 0.960      | -            | -                | -                | -         |    -1.40 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1237 | 2024-08-21 | Sashi             | W   | 0.959      | 0.143        | 0.122 (0.017)    | 0.856 (0.117)    | 0 (0.000) |    22.07 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1593 | 2024-08-09 | Sashi             | L   | 0.878      | -            | -                | -                | -         |    -6.91 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1607 | 2024-08-08 | Permitta          | W   | 0.873      | 0.426        | 0.023 (0.009)    | 1.000 (0.372)    | 0 (0.000) |    15.80 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1905 | 2024-07-31 | B8                | L   | 0.821      | -            | -                | -                | -         |    -5.37 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1954 | 2024-07-30 | Space             | W   | 0.814      | 0.500        | 0.003 (0.001)    | 0.544 (0.222)    | 0 (0.000) |    11.59 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1989 | 2024-07-29 | ARCRED            | L   | 0.807      | -            | -                | -                | -         |   -11.31 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2314 | 2024-07-19 | Nexus             | L   | 0.740      | -            | -                | -                | -         |   -15.16 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2347 | 2024-07-18 | Nemiga            | L   | 0.734      | -            | -                | -                | -         |    -4.84 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2426 | 2024-07-17 | Verdant           | W   | 0.727      | 0.333        | 0.014 (0.003)    | 0.379 (0.092)    | 0 (0.000) |    10.20 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2482 | 2024-07-16 | Aurora            | L   | 0.721      | -            | -                | -                | -         |    -2.48 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2533 | 2024-07-15 | Betera            | W   | 0.714      | -            | -                | -                | 0 (0.000) |     4.16 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2850 | 2024-06-13 | ex-Enterprise     | W   | 0.501      | 0.379        | 0.030 (0.006)    | 0.586 (0.111)    | 0 (0.000) |     8.37 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2886 | 2024-06-12 | Rebels            | W   | 0.494      | 0.379        | 0.049 (0.009)    | 0.702 (0.131)    | 0 (0.000) |    10.37 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2906 | 2024-06-11 | ECLOT             | W   | 0.487      | 0.379        | 0.063 (0.012)    | 0.728 (0.134)    | 0 (0.000) |    12.27 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3109 | 2024-06-07 | B8                | L   | 0.460      | -            | -                | -                | -         |    -3.09 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3113 | 2024-06-07 | Aurora            | L   | 0.459      | -            | -                | -                | -         |    -1.27 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3213 | 2024-06-05 | The Prodigies     | W   | 0.448      | -            | -                | -                | 0 (0.000) |     2.11 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3296 | 2024-06-03 | GL Academy        | W   | 0.434      | -            | -                | -                | -         |     2.18 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3402 | 2024-05-30 | Rebels            | L   | 0.408      | -            | -                | -                | -         |    -4.37 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3582 | 2024-05-22 | System5           | W   | 0.354      | -            | -                | -                | -         |     2.58 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3630 | 2024-05-21 | EYEBALLERS        | W   | 0.348      | -            | -                | -                | -         |     4.36 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3669 | 2024-05-20 | Nexus             | W   | 0.340      | 0.379        | 0.006 (0.001)    | 0.554 (0.071)    | -         |     4.38 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3839 | 2024-05-15 | Norway            | W   | 0.307      | -            | -                | -                | -         |     2.23 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     3898 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.301      | 0.500        | 0.087 (0.013)    | 0.904 (0.136)    | -         |     7.05 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4122 | 2024-05-04 | FlyQuest          | L   | 0.233      | -            | -                | -                | -         |    -2.50 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     4137 | 2024-05-03 | BIG               | L   | 0.226      | -            | -                | -                | -         |    -0.40 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            5 |     4157 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.220      | 0.889        | 0.171 (0.034)    | 0.344 (0.067)    | 1 (0.220) |     6.50 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4207 | 2024-04-30 | Complexity        | L   | 0.206      | -            | -                | -                | -         |    -0.06 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4417 | 2024-04-20 | EYEBALLERS        | L   | 0.141      | -            | -                | -                | -         |    -2.62 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4956 | 2024-04-03 | SAW               | L   | 0.027      | -            | -                | -                | -         |    -0.03 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     5011 | 2024-04-01 | RUSH B            | W   | 0.014      | -            | -                | -                | -         |     0.21 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,639.82)
- Divide that value by the 5th highest value among all rosters ($332,851.90)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.747 | $1,250.00      | $933.83         |
| 2024-06-13 |      0.501 | $10,895.00     | $5,461.04       |
| 2024-06-09 |      0.474 | $500.00        | $237.10         |
| 2024-05-12 |      0.287 | $7,000.00      | $2,007.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
