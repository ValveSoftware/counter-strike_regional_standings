### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [118](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [83]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  773.2<br />
<br />
Final Rank Value (773.2) = Starting Rank Value (722.9) + Head To Head Adjustments (50.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.067[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 722.9
- 400 + ( ( 0.165 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 722.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2147 | 2024-08-23 | Insilio         | L   | 0.699      | -            | -                | -                | -         |    -7.74 | Aaron, Bibu, DGL, kory, Porya |
|           26 |     2177 | 2024-08-22 | BIG             | L   | 0.692      | -            | -                | -                | -         |    -0.80 | Aaron, Bibu, DGL, kory, Porya |
|           25 |     2205 | 2024-08-21 | SAW             | L   | 0.687      | -            | -                | -                | -         |    -0.20 | Aaron, Bibu, DGL, kory, Porya |
|           24 |     2236 | 2024-08-21 | Sashi           | W   | 0.686      | 0.143        | 0.052 (0.005)    | 0.701 (0.069)    | 0 (0.000) |    16.67 | Aaron, Bibu, DGL, kory, Porya |
|           23 |     2592 | 2024-08-09 | Sashi           | L   | 0.605      | -            | -                | -                | -         |    -4.38 | Aaron, Bibu, DGL, kory, Porya |
|           22 |     2606 | 2024-08-08 | Permitta        | W   | 0.600      | 0.426        | 0.029 (0.008)    | 1.000 (0.256)    | 0 (0.000) |    15.68 | Aaron, Bibu, DGL, kory, Porya |
|           21 |     2904 | 2024-07-31 | B8              | L   | 0.548      | -            | -                | -                | -         |    -0.84 | Aaron, Bibu, DGL, kory, Porya |
|           20 |     2953 | 2024-07-30 | SovvyKiNG       | W   | 0.541      | 0.500        | 0.001 (0.000)    | 0.404 (0.109)    | 0 (0.000) |     9.06 | Aaron, Bibu, DGL, kory, Porya |
|           19 |     2988 | 2024-07-29 | ARCRED          | L   | 0.534      | -            | -                | -                | -         |    -6.32 | Aaron, Bibu, DGL, kory, Porya |
|           18 |     3313 | 2024-07-19 | Nexus           | L   | 0.467      | -            | -                | -                | -         |    -5.60 | Aaron, Bibu, DGL, kory, Porya |
|           17 |     3346 | 2024-07-18 | Nemiga          | L   | 0.461      | -            | -                | -                | -         |    -0.45 | Aaron, Bibu, DGL, kory, Porya |
|           16 |     3425 | 2024-07-17 | Verdant         | W   | 0.454      | 0.333        | 0.014 (0.002)    | 0.264 (0.040)    | 0 (0.000) |    10.10 | Aaron, Bibu, DGL, kory, Porya |
|           15 |     3481 | 2024-07-16 | Aurora          | L   | 0.448      | -            | -                | -                | -         |    -1.55 | Aaron, Bibu, DGL, kory, Porya |
|           14 |     3532 | 2024-07-15 | Betera          | W   | 0.441      | 0.333        | -                | 0.097 (0.014)    | 0 (0.000) |     3.93 | Aaron, Bibu, DGL, kory, Porya |
|           13 |     3849 | 2024-06-13 | ex-Enterprise   | W   | 0.228      | 0.379        | 0.017 (0.001)    | 0.441 (0.038)    | 0 (0.000) |     5.71 | Aaron, Bibu, DGL, kory, Porya |
|           12 |     3885 | 2024-06-12 | Rebels          | W   | 0.221      | 0.379        | 0.032 (0.003)    | 0.516 (0.043)    | 0 (0.000) |     5.05 | Aaron, Bibu, DGL, kory, Porya |
|           11 |     3905 | 2024-06-11 | ECLOT           | W   | 0.214      | 0.379        | 0.048 (0.004)    | 0.957 (0.078)    | 0 (0.000) |     6.31 | Aaron, Bibu, DGL, kory, Porya |
|           10 |     4108 | 2024-06-07 | B8              | L   | 0.187      | -            | -                | -                | -         |    -0.21 | Aaron, Bibu, DGL, kory, Porya |
|            9 |     4112 | 2024-06-07 | Aurora          | L   | 0.186      | -            | -                | -                | -         |    -0.59 | Aaron, Bibu, DGL, kory, Porya |
|            8 |     4212 | 2024-06-05 | The Prodigies   | W   | 0.175      | 0.379        | 0.005 (0.000)    | -                | 0 (0.000) |     2.20 | Aaron, Bibu, DGL, kory, Porya |
|            7 |     4295 | 2024-06-03 | GL Academy      | W   | 0.161      | -            | -                | -                | 0 (0.000) |     1.13 | Aaron, Bibu, DGL, kory, Porya |
|            6 |     4401 | 2024-05-30 | Rebels          | L   | 0.135      | -            | -                | -                | -         |    -1.16 | Aaron, Bibu, DGL, kory, Porya |
|            5 |     4581 | 2024-05-22 | System5         | W   | 0.081      | -            | -                | -                | -         |     0.84 | Aaron, Bibu, DGL, kory, Porya |
|            4 |     4629 | 2024-05-21 | EYEBALLERS      | W   | 0.074      | -            | -                | -                | -         |     0.99 | Aaron, Bibu, DGL, kory, Porya |
|            3 |     4668 | 2024-05-20 | Nexus           | W   | 0.067      | 0.379        | 0.014 (0.000)    | 0.523 (0.013)    | -         |     1.45 | Aaron, Bibu, DGL, kory, Porya |
|            2 |     4838 | 2024-05-15 | Norway          | W   | 0.034      | -            | -                | -                | -         |     0.35 | Aaron, Bibu, DGL, kory, Porya |
|            1 |     4897 | 2024-05-14 | ALTERNATE aTTaX | W   | 0.028      | 0.500        | 0.040 (0.001)    | 0.749 (0.010)    | -         |     0.68 | Aaron, Bibu, DGL, kory, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,179.06)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.474 | $1,250.00      | $592.49         |
| 2024-06-13 |      0.228 | $10,895.00     | $2,486.00       |
| 2024-06-09 |      0.201 | $500.00        | $100.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
