### Roster Details<br />
Team Name: Akimbo<br />
Roster: kralz , Mike, N2o, obi, taggy<br />
Global Rank: [116](../../standings_global_2024_11_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_11_13.md)<br />
Regional Rank: [9]( ../../standings_asia_2024_11_13.md)<br />
<br />
Final Rank Value:  789.8<br />
<br />
Final Rank Value (789.8) = Starting Rank Value (760.4) + Head To Head Adjustments (29.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.4
- 400 + ( ( 0.180 - 0.000 ) / ( 0.801 - 0.000 ) ) * 1600 = 760.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1035 | 2024-09-29 | LAG              | L   | 0.902      | -            | -                | -                | -         |   -18.71 | kralz , Mike, N2o, obi, taggy      |
|           19 |     1351 | 2024-09-21 | undefined        | W   | 0.850      | 0.372        | 0.009 (0.003)    | 0.228 (0.072)    | 0 (0.000) |    12.36 | kmrn, kralz , laxiee, N2o, obi     |
|           18 |     1356 | 2024-09-21 | E-Xolos LAZER    | W   | 0.848      | 0.371        | 0.008 (0.003)    | 0.349 (0.110)    | 0 (0.000) |    13.78 | kmrn, kralz , N2o, obi, taggy      |
|           17 |     1650 | 2024-09-11 | Aether           | W   | 0.783      | 0.371        | 0.000 (0.000)    | 0.090 (0.026)    | 0 (0.000) |     3.90 | kmrn, kralz , laxiee, N2o, obi     |
|           16 |     1655 | 2024-09-11 | InControl        | W   | 0.781      | 0.372        | 0.007 (0.002)    | 0.115 (0.033)    | 0 (0.000) |     9.11 | kmrn, kralz , laxiee, N2o, obi     |
|           15 |     1711 | 2024-09-09 | Canada           | W   | 0.769      | 0.372        | 0.003 (0.001)    | 0.115 (0.033)    | 0 (0.000) |     8.62 | kmrn, kralz , laxiee, N2o, obi     |
|           14 |     1747 | 2024-09-07 | Nouns            | L   | 0.755      | -            | -                | -                | -         |    -3.78 | kmrn, kralz , laxiee, N2o, obi     |
|           13 |     1749 | 2024-09-07 | Unjustified      | W   | 0.755      | -            | -                | -                | 1 (0.755) |     2.74 | kmrn, kralz , laxiee, N2o, obi     |
|           12 |     3909 | 2024-06-16 | E-Xolos LAZER    | L   | 0.202      | -            | -                | -                | -         |    -3.09 | calamity, kralz , laxiee, N2o, obi |
|           11 |     3936 | 2024-06-15 | Take Flyte       | L   | 0.196      | -            | -                | -                | -         |    -2.92 | calamity, kralz , laxiee, N2o, obi |
|           10 |     3942 | 2024-06-15 | Legacy           | L   | 0.194      | -            | -                | -                | -         |    -1.11 | calamity, kralz , laxiee, N2o, obi |
|            9 |     3972 | 2024-06-14 | Canada           | W   | 0.189      | 0.143        | 0.003 (0.000)    | 0.115 (0.003)    | 0 (0.000) |     2.36 | calamity, kralz , laxiee, N2o, obi |
|            8 |     3978 | 2024-06-14 | Penance          | W   | 0.188      | 0.371        | 0.001 (0.000)    | 0.085 (0.006)    | 0 (0.000) |     1.89 | calamity, kralz , laxiee, N2o, obi |
|            7 |     4089 | 2024-06-10 | Legacy           | L   | 0.162      | -            | -                | -                | -         |    -0.92 | calamity, kralz , laxiee, N2o, obi |
|            6 |     4123 | 2024-06-09 | E-Xolos LAZER    | W   | 0.156      | 0.368        | 0.008 (0.000)    | 0.349 (0.020)    | 0 (0.000) |     2.51 | calamity, kralz , laxiee, N2o, obi |
|            5 |     4295 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.136      | 0.371        | 0.014 (0.001)    | 0.456 (0.023)    | 0 (0.000) |     2.35 | calamity, kralz , laxiee, N2o, obi |
|            4 |     4306 | 2024-06-06 | Legacy           | L   | 0.135      | -            | -                | -                | -         |    -0.75 | calamity, kralz , laxiee, N2o, obi |
|            3 |     4422 | 2024-06-04 | Final Form       | W   | 0.122      | 0.371        | -                | 0.011 (0.001)    | -         |     0.68 | calamity, kralz , laxiee, N2o, obi |
|            2 |     4458 | 2024-06-03 | Villainous       | W   | 0.116      | 0.368        | 0.000 (0.000)    | -                | -         |     0.74 | calamity, kralz , laxiee, N2o, obi |
|            1 |     4812 | 2024-05-20 | Party Astronauts | L   | 0.023      | -            | -                | -                | -         |    -0.27 | calamity, kralz , laxiee, N2o, obi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,798.80)
- Divide that value by the 5th highest value among all rosters ($448,201.29)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.850 | $7,000.00      | $5,948.66       |
| 2024-06-16 |      0.202 | $750.00        | $151.82         |
| 2024-06-10 |      0.162 | $4,300.00      | $698.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
