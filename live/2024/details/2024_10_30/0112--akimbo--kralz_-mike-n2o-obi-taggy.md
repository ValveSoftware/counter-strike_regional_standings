### Roster Details<br />
Team Name: Akimbo<br />
Roster: kralz , Mike, N2o, obi, taggy<br />
Global Rank: [112](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [8]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  832.0<br />
<br />
Final Rank Value (832.0) = Starting Rank Value (804.5) + Head To Head Adjustments (27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.402[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 804.5
- 400 + ( ( 0.204 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 804.5


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
|           20 |      725 | 2024-09-29 | LAG              | L   | 0.995      | -            | -                | -                | -         |   -21.03 | kralz , Mike, N2o, obi, taggy      |
|           19 |     1041 | 2024-09-21 | undefined        | W   | 0.943      | 0.372        | 0.019 (0.007)    | 0.253 (0.089)    | 0 (0.000) |    13.57 | kmrn, kralz , laxiee, N2o, obi     |
|           18 |     1046 | 2024-09-21 | E-Xolos LAZER    | W   | 0.942      | 0.371        | 0.017 (0.006)    | 0.398 (0.139)    | 0 (0.000) |    15.30 | kmrn, kralz , N2o, obi, taggy      |
|           17 |     1340 | 2024-09-11 | Aether           | W   | 0.876      | 0.371        | 0.000 (0.000)    | 0.099 (0.032)    | 0 (0.000) |     3.66 | kmrn, kralz , laxiee, N2o, obi     |
|           16 |     1345 | 2024-09-11 | InControl        | W   | 0.875      | 0.372        | 0.013 (0.004)    | 0.129 (0.042)    | 0 (0.000) |     9.63 | kmrn, kralz , laxiee, N2o, obi     |
|           15 |     1401 | 2024-09-09 | Homyno           | W   | 0.863      | 0.372        | 0.006 (0.002)    | 0.098 (0.031)    | 0 (0.000) |     7.21 | kmrn, kralz , laxiee, N2o, obi     |
|           14 |     1437 | 2024-09-07 | Nouns            | L   | 0.849      | -            | -                | -                | -         |    -3.83 | kmrn, kralz , laxiee, N2o, obi     |
|           13 |     1439 | 2024-09-07 | Unjustified      | W   | 0.848      | -            | -                | -                | 1 (0.848) |     2.48 | kmrn, kralz , laxiee, N2o, obi     |
|           12 |     3599 | 2024-06-16 | E-Xolos LAZER    | L   | 0.296      | -            | -                | -                | -         |    -4.50 | calamity, kralz , laxiee, N2o, obi |
|           11 |     3626 | 2024-06-15 | Take Flyte       | L   | 0.289      | -            | -                | -                | -         |    -4.46 | calamity, kralz , laxiee, N2o, obi |
|           10 |     3632 | 2024-06-15 | Legacy           | L   | 0.288      | -            | -                | -                | -         |    -1.83 | calamity, kralz , laxiee, N2o, obi |
|            9 |     3662 | 2024-06-14 | Homyno           | W   | 0.283      | 0.143        | 0.006 (0.000)    | 0.098 (0.004)    | 0 (0.000) |     2.62 | calamity, kralz , laxiee, N2o, obi |
|            8 |     3668 | 2024-06-14 | Penance          | W   | 0.281      | 0.371        | 0.002 (0.000)    | 0.111 (0.012)    | 0 (0.000) |     2.83 | calamity, kralz , laxiee, N2o, obi |
|            7 |     3779 | 2024-06-10 | Legacy           | L   | 0.256      | -            | -                | -                | -         |    -1.62 | calamity, kralz , laxiee, N2o, obi |
|            6 |     3813 | 2024-06-09 | E-Xolos LAZER    | W   | 0.249      | 0.368        | 0.017 (0.002)    | 0.398 (0.036)    | 0 (0.000) |     4.01 | calamity, kralz , laxiee, N2o, obi |
|            5 |     3985 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.229      | 0.371        | 0.028 (0.002)    | 0.503 (0.043)    | 0 (0.000) |     3.93 | calamity, kralz , laxiee, N2o, obi |
|            4 |     3996 | 2024-06-06 | Legacy           | L   | 0.228      | -            | -                | -                | -         |    -1.42 | calamity, kralz , laxiee, N2o, obi |
|            3 |     4112 | 2024-06-04 | Final Form       | W   | 0.216      | 0.371        | -                | 0.018 (0.001)    | -         |     1.02 | calamity, kralz , laxiee, N2o, obi |
|            2 |     4148 | 2024-06-03 | Villainous       | W   | 0.209      | 0.368        | 0.001 (0.000)    | -                | -         |     1.16 | calamity, kralz , laxiee, N2o, obi |
|            1 |     4502 | 2024-05-20 | Party Astronauts | L   | 0.116      | -            | -                | -                | -         |    -1.25 | calamity, kralz , laxiee, N2o, obi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,925.46)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.943 | $7,000.00      | $6,603.15       |
| 2024-06-16 |      0.296 | $750.00        | $221.95         |
| 2024-06-10 |      0.256 | $4,300.00      | $1,100.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
