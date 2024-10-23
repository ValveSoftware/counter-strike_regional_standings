### Roster Details<br />
Team Name: ATOX<br />
Roster: cool4st, kabal, MiQ, sk0R, yAmi<br />
Global Rank: [55](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_23.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_10_23.md)<br />
<br />
Final Rank Value:  1029.0<br />
<br />
Final Rank Value (1029.0) = Starting Rank Value (1089.9) + Head To Head Adjustments (-60.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.544[<sup>2</sup>](#table1)

The average of these factors is 0.352<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1089.9
- 400 + ( ( 0.352 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 1089.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      107 | 2024-10-18 | IHC               | L   | 1.000      | -            | -                | -                | -         |   -17.41 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           21 |      135 | 2024-10-17 | Clutch            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.069 (0.023)    | 1 (1.000) |     1.61 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           20 |      153 | 2024-10-16 | Lynn Vision       | W   | 1.000      | 0.143        | 0.045 (0.006)    | 0.153 (0.022)    | 0 (0.000) |     7.89 | FlyNN, kabal, masti, MiQ, yAmi       |
|           19 |      161 | 2024-10-16 | IHC               | L   | 1.000      | -            | -                | -                | -         |   -18.78 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           18 |      180 | 2024-10-15 | IHC               | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.287 (0.041)    | 0 (0.000) |    12.46 | FlyNN, kabal, masti, MiQ, yAmi       |
|           17 |      185 | 2024-10-15 | The QUBE          | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 1 (1.000) |     0.84 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           16 |      437 | 2024-10-04 | Clutch            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.069 (0.010)    | 1 (1.000) |     1.59 | cool4st, dobu, kabal, MiQ, yAmi      |
|           15 |      443 | 2024-10-04 | IHC               | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.287 (0.041)    | 1 (1.000) |    13.58 | cool4st, dobu, kabal, MiQ, yAmi      |
|           14 |      700 | 2024-09-27 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -24.32 | dobu, FlyNN, kabal, MiQ, yAmi        |
|           13 |     1126 | 2024-09-14 | FURIA             | L   | 0.939      | -            | -                | -                | -         |    -0.98 | Annihilation, dobu, kabal, MiQ, yAmi |
|           12 |     1157 | 2024-09-13 | ENCE              | W   | 0.933      | 0.889        | 0.442 (0.367)    | 0.257 (0.213)    | 1 (0.933) |    23.17 | Annihilation, dobu, kabal, MiQ, yAmi |
|           11 |     1204 | 2024-09-12 | Falcons           | L   | 0.925      | -            | -                | -                | -         |    -2.81 | Annihilation, dobu, kabal, MiQ, yAmi |
|           10 |     1234 | 2024-09-11 | Vitality          | L   | 0.918      | -            | -                | -                | -         |    -0.20 | Annihilation, dobu, kabal, MiQ, yAmi |
|            9 |     1546 | 2024-08-30 | GR                | L   | 0.838      | -            | -                | -                | -         |   -23.01 | Annihilation, dobu, kabal, MiQ, yAmi |
|            8 |     1557 | 2024-08-30 | Chinggis Warriors | W   | 0.837      | 0.143        | 0.010 (0.001)    | 0.138 (0.017)    | 0 (0.000) |     5.48 | Annihilation, dobu, kabal, MiQ, yAmi |
|            7 |     1593 | 2024-08-29 | THE               | W   | 0.832      | 0.143        | 0.000 (0.000)    | 0.085 (0.010)    | 0 (0.000) |     1.54 | Annihilation, dobu, kabal, MiQ, yAmi |
|            6 |     1608 | 2024-08-29 | IHC               | W   | 0.830      | 0.143        | 0.035 (0.004)    | 0.287 (0.034)    | 0 (0.000) |    10.98 | Annihilation, dobu, kabal, MiQ, yAmi |
|            5 |     1658 | 2024-08-28 | GR                | L   | 0.824      | -            | -                | -                | -         |   -23.30 | Annihilation, dobu, kabal, MiQ, yAmi |
|            4 |     1667 | 2024-08-28 | NomadS            | W   | 0.823      | -            | -                | -                | -         |     1.10 | Annihilation, dobu, kabal, MiQ, yAmi |
|            3 |     2568 | 2024-08-02 | Rare Atom         | L   | 0.651      | -            | -                | -                | -         |   -15.68 | Annihilation, dobu, kabal, MiQ, yAmi |
|            2 |     2602 | 2024-08-01 | CatEvil           | W   | 0.645      | 0.143        | -                | 0.149 (0.014)    | -         |     1.26 | Annihilation, dobu, kabal, MiQ, yAmi |
|            1 |     2609 | 2024-08-01 | Rare Atom         | L   | 0.644      | -            | -                | -                | -         |   -15.93 | Annihilation, dobu, kabal, MiQ, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,454.40)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-09-22 |      0.993 | $7,000.00      | $6,954.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
