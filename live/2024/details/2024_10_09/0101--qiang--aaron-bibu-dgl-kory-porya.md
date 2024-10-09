### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [101](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [71]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  843.4<br />
<br />
Final Rank Value (843.4) = Starting Rank Value (791.7) + Head To Head Adjustments (51.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.014[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 791.7
- 400 + ( ( 0.203 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 791.7


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
|           32 |     1601 | 2024-08-23 | Insilio           | L   | 0.885      | -            | -                | -                | -         |   -12.18 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1631 | 2024-08-22 | BIG               | L   | 0.878      | -            | -                | -                | -         |    -1.11 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1659 | 2024-08-21 | SAW               | L   | 0.873      | -            | -                | -                | -         |    -0.82 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1690 | 2024-08-21 | Sashi             | W   | 0.872      | 0.143        | 0.111 (0.014)    | 0.640 (0.080)    | 0 (0.000) |    20.47 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     2046 | 2024-08-09 | Sashi             | L   | 0.792      | -            | -                | -                | -         |    -6.04 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     2060 | 2024-08-08 | Permitta          | W   | 0.787      | 0.426        | 0.036 (0.012)    | 0.918 (0.308)    | 0 (0.000) |    15.60 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     2358 | 2024-07-31 | B8                | L   | 0.735      | -            | -                | -                | -         |    -4.33 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2407 | 2024-07-30 | Space             | W   | 0.728      | 0.500        | 0.003 (0.001)    | 0.425 (0.155)    | 0 (0.000) |    10.75 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2442 | 2024-07-29 | ARCRED            | L   | 0.721      | -            | -                | -                | -         |    -9.96 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2767 | 2024-07-19 | Nexus             | L   | 0.653      | -            | -                | -                | -         |   -12.18 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2800 | 2024-07-18 | Nemiga            | L   | 0.648      | -            | -                | -                | -         |    -3.90 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2879 | 2024-07-17 | Verdant           | W   | 0.641      | 0.333        | 0.014 (0.003)    | 0.293 (0.063)    | 0 (0.000) |     9.86 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2935 | 2024-07-16 | Aurora            | L   | 0.634      | -            | -                | -                | -         |    -2.21 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2986 | 2024-07-15 | Betera            | W   | 0.627      | 0.333        | -                | 0.112 (0.023)    | 0 (0.000) |     4.21 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     3303 | 2024-06-13 | ex-Enterprise     | W   | 0.415      | 0.379        | 0.028 (0.004)    | 0.457 (0.072)    | 0 (0.000) |     7.41 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3339 | 2024-06-12 | Rebels            | W   | 0.408      | 0.379        | 0.049 (0.008)    | 0.560 (0.086)    | 0 (0.000) |     8.79 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3359 | 2024-06-11 | ECLOT             | W   | 0.401      | 0.379        | 0.095 (0.014)    | 0.728 (0.111)    | 0 (0.000) |    11.45 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3562 | 2024-06-07 | B8                | L   | 0.373      | -            | -                | -                | -         |    -2.18 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3566 | 2024-06-07 | Aurora            | L   | 0.373      | -            | -                | -                | -         |    -1.10 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3666 | 2024-06-05 | The Prodigies     | W   | 0.361      | 0.379        | 0.007 (0.001)    | -                | 0 (0.000) |     3.73 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3749 | 2024-06-03 | GL Academy        | W   | 0.348      | -            | -                | -                | -         |     1.96 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3855 | 2024-05-30 | Rebels            | L   | 0.321      | -            | -                | -                | -         |    -3.22 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     4035 | 2024-05-22 | System5           | W   | 0.268      | -            | -                | -                | -         |     2.24 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     4083 | 2024-05-21 | EYEBALLERS        | W   | 0.261      | -            | -                | -                | -         |     3.43 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     4122 | 2024-05-20 | Nexus             | W   | 0.254      | 0.379        | -                | 0.477 (0.046)    | -         |     3.74 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4292 | 2024-05-15 | Norway            | W   | 0.221      | -            | -                | -                | -         |     1.79 | Aaron, Bibu, DGL, kory, Porya      |
|            6 |     4351 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.214      | 0.500        | 0.084 (0.009)    | 0.812 (0.087)    | -         |     5.22 | Aaron, Bibu, DGL, kory, Porya      |
|            5 |     4575 | 2024-05-04 | FlyQuest          | L   | 0.146      | -            | -                | -                | -         |    -0.29 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4590 | 2024-05-03 | BIG               | L   | 0.139      | -            | -                | -                | -         |    -0.09 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4610 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.134      | 0.889        | 0.008 (0.001)    | -                | 1 (0.134) |     1.65 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4660 | 2024-04-30 | Complexity        | L   | 0.120      | -            | -                | -                | -         |    -0.03 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4870 | 2024-04-20 | EYEBALLERS        | L   | 0.054      | -            | -                | -                | -         |    -0.98 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,940.99)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.661 | $1,250.00      | $825.73         |
| 2024-06-13 |      0.415 | $10,895.00     | $4,518.88       |
| 2024-06-09 |      0.388 | $500.00        | $193.86         |
| 2024-05-12 |      0.200 | $7,000.00      | $1,402.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
