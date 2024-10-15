### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [104](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [73]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  830.7<br />
<br />
Final Rank Value (830.7) = Starting Rank Value (781.5) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.5
- 400 + ( ( 0.196 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 781.5


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
|           32 |     1698 | 2024-08-23 | Insilio           | L   | 0.846      | -            | -                | -                | -         |   -11.06 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1728 | 2024-08-22 | BIG               | L   | 0.839      | -            | -                | -                | -         |    -0.99 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1756 | 2024-08-21 | SAW               | L   | 0.834      | -            | -                | -                | -         |    -0.80 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1787 | 2024-08-21 | Sashi             | W   | 0.833      | 0.143        | 0.100 (0.012)    | 0.634 (0.075)    | 0 (0.000) |    19.49 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     2143 | 2024-08-09 | Sashi             | L   | 0.752      | -            | -                | -                | -         |    -5.87 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     2157 | 2024-08-08 | Permitta          | W   | 0.747      | 0.426        | 0.034 (0.011)    | 1.000 (0.318)    | 0 (0.000) |    15.15 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     2455 | 2024-07-31 | B8                | L   | 0.695      | -            | -                | -                | -         |    -4.10 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2504 | 2024-07-30 | Space             | W   | 0.688      | 0.500        | 0.002 (0.001)    | 0.439 (0.151)    | 0 (0.000) |    10.48 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2539 | 2024-07-29 | ARCRED            | L   | 0.681      | -            | -                | -                | -         |    -9.31 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2864 | 2024-07-19 | Nexus             | L   | 0.614      | -            | -                | -                | -         |   -11.06 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2897 | 2024-07-18 | Nemiga            | L   | 0.608      | -            | -                | -                | -         |    -3.62 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2976 | 2024-07-17 | Verdant           | W   | 0.601      | 0.333        | 0.013 (0.003)    | 0.280 (0.056)    | 0 (0.000) |     9.57 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     3032 | 2024-07-16 | Aurora            | L   | 0.595      | -            | -                | -                | -         |    -1.94 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     3083 | 2024-07-15 | Betera            | W   | 0.588      | 0.333        | -                | 0.109 (0.021)    | 0 (0.000) |     4.13 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     3400 | 2024-06-13 | ex-Enterprise     | W   | 0.375      | 0.379        | 0.025 (0.004)    | 0.463 (0.066)    | 0 (0.000) |     6.81 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3436 | 2024-06-12 | Rebels            | W   | 0.368      | 0.379        | 0.046 (0.006)    | 0.542 (0.076)    | 0 (0.000) |     7.96 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3456 | 2024-06-11 | ECLOT             | W   | 0.361      | 0.379        | 0.089 (0.012)    | 0.744 (0.102)    | 0 (0.000) |    10.36 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3659 | 2024-06-07 | B8                | L   | 0.334      | -            | -                | -                | -         |    -1.95 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3663 | 2024-06-07 | Aurora            | L   | 0.333      | -            | -                | -                | -         |    -0.93 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3763 | 2024-06-05 | The Prodigies     | W   | 0.322      | 0.379        | 0.007 (0.001)    | -                | 0 (0.000) |     3.44 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3846 | 2024-06-03 | GL Academy        | W   | 0.308      | -            | -                | -                | -         |     1.79 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3952 | 2024-05-30 | Rebels            | L   | 0.282      | -            | -                | -                | -         |    -2.80 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     4132 | 2024-05-22 | System5           | W   | 0.228      | -            | -                | -                | -         |     1.98 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     4180 | 2024-05-21 | EYEBALLERS        | W   | 0.221      | -            | -                | -                | -         |     2.90 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     4219 | 2024-05-20 | Nexus             | W   | 0.214      | 0.379        | -                | 0.463 (0.037)    | -         |     3.27 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4389 | 2024-05-15 | Norway            | W   | 0.181      | -            | -                | -                | -         |     1.52 | Aaron, Bibu, DGL, kory, Porya      |
|            6 |     4448 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.175      | 0.500        | 0.078 (0.007)    | 0.787 (0.069)    | -         |     4.23 | Aaron, Bibu, DGL, kory, Porya      |
|            5 |     4672 | 2024-05-04 | FlyQuest          | L   | 0.106      | -            | -                | -                | -         |    -0.21 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4687 | 2024-05-03 | BIG               | L   | 0.100      | -            | -                | -                | -         |    -0.06 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4707 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.094      | 0.889        | 0.006 (0.001)    | -                | 1 (0.094) |     1.16 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4757 | 2024-04-30 | Complexity        | L   | 0.080      | -            | -                | -                | -         |    -0.02 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4967 | 2024-04-20 | EYEBALLERS        | L   | 0.015      | -            | -                | -                | -         |    -0.27 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,162.64)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.621 | $1,250.00      | $776.20         |
| 2024-06-13 |      0.375 | $10,895.00     | $4,087.21       |
| 2024-06-09 |      0.348 | $500.00        | $174.05         |
| 2024-05-12 |      0.161 | $7,000.00      | $1,125.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
