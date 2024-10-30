### Roster Details<br />
Team Name: ATOX<br />
Roster: cool4st, kabal, MiQ, sk0R, yAmi<br />
Global Rank: [60](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_30.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_10_30.md)<br />
<br />
Final Rank Value:  1043.5<br />
<br />
Final Rank Value (1043.5) = Starting Rank Value (1104.1) + Head To Head Adjustments (-60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.418[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.551[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1104.1
- 400 + ( ( 0.355 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1104.1


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
|           22 |      237 | 2024-10-18 | IHC               | L   | 1.000      | -            | -                | -                | -         |   -17.41 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           21 |      265 | 2024-10-17 | Clutch            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.069 (0.023)    | 1 (1.000) |     1.52 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           20 |      283 | 2024-10-16 | Lynn Vision       | W   | 1.000      | 0.143        | 0.044 (0.006)    | 0.142 (0.020)    | 0 (0.000) |     7.52 | FlyNN, kabal, masti, MiQ, yAmi       |
|           19 |      291 | 2024-10-16 | IHC               | L   | 1.000      | -            | -                | -                | -         |   -18.79 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           18 |      310 | 2024-10-15 | IHC               | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.277 (0.040)    | 0 (0.000) |    12.45 | FlyNN, kabal, masti, MiQ, yAmi       |
|           17 |      315 | 2024-10-15 | The QUBE          | W   | 1.000      | 0.333        | 0.000 (0.000)    | -                | 1 (1.000) |     0.77 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           16 |      567 | 2024-10-04 | Clutch            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.069 (0.010)    | 1 (1.000) |     1.49 | cool4st, dobu, kabal, MiQ, yAmi      |
|           15 |      573 | 2024-10-04 | IHC               | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.277 (0.040)    | 1 (1.000) |    13.57 | cool4st, dobu, kabal, MiQ, yAmi      |
|           14 |      830 | 2024-09-27 | Chinggis Warriors | L   | 0.978      | -            | -                | -                | -         |   -24.34 | dobu, FlyNN, kabal, MiQ, yAmi        |
|           13 |     1256 | 2024-09-14 | FURIA             | L   | 0.893      | -            | -                | -                | -         |    -0.95 | Annihilation, dobu, kabal, MiQ, yAmi |
|           12 |     1287 | 2024-09-13 | ENCE              | W   | 0.887      | 0.889        | 0.486 (0.383)    | 0.241 (0.190)    | 1 (0.887) |    22.30 | Annihilation, dobu, kabal, MiQ, yAmi |
|           11 |     1334 | 2024-09-12 | Falcons           | L   | 0.879      | -            | -                | -                | -         |    -2.94 | Annihilation, dobu, kabal, MiQ, yAmi |
|           10 |     1364 | 2024-09-11 | Vitality          | L   | 0.872      | -            | -                | -                | -         |    -0.21 | Annihilation, dobu, kabal, MiQ, yAmi |
|            9 |     1676 | 2024-08-30 | GR                | L   | 0.792      | -            | -                | -                | -         |   -21.94 | Annihilation, dobu, kabal, MiQ, yAmi |
|            8 |     1687 | 2024-08-30 | Chinggis Warriors | W   | 0.791      | 0.143        | 0.011 (0.001)    | 0.125 (0.014)    | 0 (0.000) |     4.76 | Annihilation, dobu, kabal, MiQ, yAmi |
|            7 |     1723 | 2024-08-29 | THE               | W   | 0.786      | 0.143        | 0.000 (0.000)    | 0.079 (0.009)    | 0 (0.000) |     1.33 | Annihilation, dobu, kabal, MiQ, yAmi |
|            6 |     1738 | 2024-08-29 | IHC               | W   | 0.784      | 0.143        | 0.039 (0.004)    | 0.277 (0.031)    | 0 (0.000) |    10.36 | Annihilation, dobu, kabal, MiQ, yAmi |
|            5 |     1788 | 2024-08-28 | GR                | L   | 0.778      | -            | -                | -                | -         |   -22.14 | Annihilation, dobu, kabal, MiQ, yAmi |
|            4 |     1797 | 2024-08-28 | NomadS            | W   | 0.777      | -            | -                | -                | -         |     0.96 | Annihilation, dobu, kabal, MiQ, yAmi |
|            3 |     2698 | 2024-08-02 | Rare Atom         | L   | 0.605      | -            | -                | -                | -         |   -14.92 | Annihilation, dobu, kabal, MiQ, yAmi |
|            2 |     2732 | 2024-08-01 | CatEvil           | W   | 0.599      | 0.143        | -                | 0.137 (0.012)    | -         |     1.06 | Annihilation, dobu, kabal, MiQ, yAmi |
|            1 |     2739 | 2024-08-01 | Rare Atom         | L   | 0.598      | -            | -                | -                | -         |   -15.10 | Annihilation, dobu, kabal, MiQ, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,132.21)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-09-22 |      0.947 | $7,000.00      | $6,632.21       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
