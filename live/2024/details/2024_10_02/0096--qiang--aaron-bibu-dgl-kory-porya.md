### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [96](../../standings_global_2024_10_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_02.md)<br />
Regional Rank: [70]( ../../standings_europe_2024_10_02.md)<br />
<br />
Final Rank Value:  852.7<br />
<br />
Final Rank Value (852.7) = Starting Rank Value (806.6) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.6
- 400 + ( ( 0.212 - 0.000 ) / ( 0.836 - 0.000 ) ) * 1600 = 806.6


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
|           32 |     1381 | 2024-08-23 | Insilio           | L   | 0.931      | -            | -                | -                | -         |   -13.59 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1411 | 2024-08-22 | BIG               | L   | 0.924      | -            | -                | -                | -         |    -2.83 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1439 | 2024-08-21 | SAW               | L   | 0.919      | -            | -                | -                | -         |    -1.35 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1470 | 2024-08-21 | Sashi             | W   | 0.918      | 0.143        | 0.114 (0.015)    | 0.722 (0.095)    | 0 (0.000) |    21.16 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1826 | 2024-08-09 | Sashi             | L   | 0.837      | -            | -                | -                | -         |    -6.64 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1840 | 2024-08-08 | Permitta          | W   | 0.832      | 0.426        | 0.030 (0.011)    | 0.964 (0.342)    | 0 (0.000) |    15.55 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     2138 | 2024-07-31 | B8                | L   | 0.780      | -            | -                | -                | -         |    -4.92 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     2187 | 2024-07-30 | Space             | W   | 0.773      | 0.500        | 0.003 (0.001)    | 0.467 (0.181)    | 0 (0.000) |    11.16 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     2222 | 2024-07-29 | ARCRED            | L   | 0.766      | -            | -                | -                | -         |   -10.70 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     2547 | 2024-07-19 | Nexus             | L   | 0.699      | -            | -                | -                | -         |   -13.80 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2580 | 2024-07-18 | Nemiga            | L   | 0.693      | -            | -                | -                | -         |    -4.46 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2659 | 2024-07-17 | Verdant           | W   | 0.686      | 0.333        | 0.013 (0.003)    | 0.323 (0.074)    | 0 (0.000) |    10.02 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2715 | 2024-07-16 | Aurora            | L   | 0.680      | -            | -                | -                | -         |    -2.33 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2766 | 2024-07-15 | Betera            | W   | 0.673      | -            | -                | -                | 0 (0.000) |     4.16 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     3083 | 2024-06-13 | ex-Enterprise     | W   | 0.460      | 0.379        | 0.028 (0.005)    | 0.502 (0.087)    | 0 (0.000) |     7.86 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     3119 | 2024-06-12 | Rebels            | W   | 0.453      | 0.379        | 0.048 (0.008)    | 0.607 (0.104)    | 0 (0.000) |     9.57 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     3139 | 2024-06-11 | ECLOT             | W   | 0.446      | 0.379        | 0.060 (0.010)    | 0.693 (0.117)    | 0 (0.000) |    11.21 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     3342 | 2024-06-07 | B8                | L   | 0.419      | -            | -                | -                | -         |    -2.68 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     3346 | 2024-06-07 | Aurora            | L   | 0.418      | -            | -                | -                | -         |    -1.18 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3446 | 2024-06-05 | The Prodigies     | W   | 0.407      | -            | -                | -                | 0 (0.000) |     2.05 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3529 | 2024-06-03 | GL Academy        | W   | 0.393      | -            | -                | -                | -         |     2.09 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3635 | 2024-05-30 | Rebels            | L   | 0.367      | -            | -                | -                | -         |    -3.88 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3815 | 2024-05-22 | System5           | W   | 0.314      | -            | -                | -                | -         |     2.44 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3863 | 2024-05-21 | EYEBALLERS        | W   | 0.307      | -            | -                | -                | -         |     3.91 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     3902 | 2024-05-20 | Nexus             | W   | 0.299      | 0.379        | 0.006 (0.001)    | 0.516 (0.058)    | -         |     4.08 | Aaron, Bibu, DGL, kory, Porya      |
|            7 |     4072 | 2024-05-15 | Norway            | W   | 0.266      | -            | -                | -                | -         |     2.01 | Aaron, Bibu, DGL, kory, Porya      |
|            6 |     4131 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.260      | 0.500        | 0.084 (0.011)    | 0.847 (0.110)    | -         |     6.17 | Aaron, Bibu, DGL, kory, Porya      |
|            5 |     4355 | 2024-05-04 | FlyQuest          | L   | 0.192      | -            | -                | -                | -         |    -2.04 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4370 | 2024-05-03 | BIG               | L   | 0.185      | -            | -                | -                | -         |    -0.35 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4390 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.179      | 0.889        | 0.159 (0.025)    | 0.287 (0.046)    | 1 (0.179) |     5.25 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4440 | 2024-04-30 | Complexity        | L   | 0.166      | -            | -                | -                | -         |    -0.05 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4650 | 2024-04-20 | EYEBALLERS        | L   | 0.100      | -            | -                | -                | -         |    -1.84 | Aaron, Bibu, Ciocardau, DGL, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,835.94)
- Divide that value by the 5th highest value among all rosters ($328,015.08)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.706 | $1,250.00      | $882.67         |
| 2024-06-13 |      0.460 | $10,895.00     | $5,015.21       |
| 2024-06-09 |      0.433 | $500.00        | $216.64         |
| 2024-05-12 |      0.246 | $7,000.00      | $1,721.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
