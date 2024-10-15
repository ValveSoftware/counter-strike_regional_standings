### Roster Details<br />
Team Name: ATOX<br />
Roster: FlyNN, kabal, masti, MiQ, yAmi<br />
Global Rank: [73](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_10_15.md)<br />
Regional Rank: [3]( ../../standings_asia_2024_10_15.md)<br />
<br />
Final Rank Value:  922.5<br />
<br />
Final Rank Value (922.5) = Starting Rank Value (960.6) + Head To Head Adjustments (-38.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.425[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 960.6
- 400 + ( ( 0.289 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 960.6


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
|           18 |        2 | 2024-10-15 | IHC               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.218 (0.031)    | 0 (0.000) |     6.63 | FlyNN, kabal, masti, MiQ, yAmi       |
|           17 |        7 | 2024-10-15 | The QUBE          | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     1.66 | cool4st, kabal, MiQ, sk0R, yAmi      |
|           16 |      259 | 2024-10-04 | Clutch            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.034 (0.005)    | 1 (1.000) |     2.34 | cool4st, dobu, kabal, MiQ, yAmi      |
|           15 |      265 | 2024-10-04 | IHC               | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.218 (0.031)    | 1 (1.000) |     6.95 | cool4st, dobu, kabal, MiQ, yAmi      |
|           14 |      522 | 2024-09-27 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -19.98 | dobu, FlyNN, kabal, MiQ, yAmi        |
|           13 |      948 | 2024-09-14 | FURIA             | L   | 0.994      | -            | -                | -                | -         |    -0.59 | Annihilation, dobu, kabal, MiQ, yAmi |
|           12 |      979 | 2024-09-13 | ENCE              | W   | 0.988      | 0.889        | 0.084 (0.073)    | 0.185 (0.162)    | 1 (0.988) |    17.76 | Annihilation, dobu, kabal, MiQ, yAmi |
|           11 |     1026 | 2024-09-12 | Falcons           | L   | 0.979      | -            | -                | -                | -         |    -1.67 | Annihilation, dobu, kabal, MiQ, yAmi |
|           10 |     1056 | 2024-09-11 | Vitality          | L   | 0.973      | -            | -                | -                | -         |    -0.11 | Annihilation, dobu, kabal, MiQ, yAmi |
|            9 |     1368 | 2024-08-30 | GR                | L   | 0.893      | -            | -                | -                | -         |   -22.28 | Annihilation, dobu, kabal, MiQ, yAmi |
|            8 |     1379 | 2024-08-30 | Chinggis Warriors | W   | 0.892      | 0.143        | 0.010 (0.001)    | 0.147 (0.019)    | 0 (0.000) |     9.71 | Annihilation, dobu, kabal, MiQ, yAmi |
|            7 |     1415 | 2024-08-29 | THE               | W   | 0.886      | 0.143        | 0.000 (0.000)    | 0.088 (0.011)    | 0 (0.000) |     2.69 | Annihilation, dobu, kabal, MiQ, yAmi |
|            6 |     1430 | 2024-08-29 | IHC               | W   | 0.885      | 0.143        | 0.000 (0.000)    | 0.218 (0.028)    | 0 (0.000) |     5.41 | Annihilation, dobu, kabal, MiQ, yAmi |
|            5 |     1480 | 2024-08-28 | GR                | L   | 0.879      | -            | -                | -                | -         |   -23.05 | Annihilation, dobu, kabal, MiQ, yAmi |
|            4 |     1489 | 2024-08-28 | NomadS            | W   | 0.878      | 0.143        | 0.000 (0.000)    | 0.045 (0.006)    | 0 (0.000) |     2.11 | Annihilation, dobu, kabal, MiQ, yAmi |
|            3 |     2390 | 2024-08-02 | Rare Atom         | L   | 0.706      | -            | -                | -                | -         |   -14.01 | Annihilation, dobu, kabal, MiQ, yAmi |
|            2 |     2424 | 2024-08-01 | CatEvil           | W   | 0.700      | 0.143        | 0.000 (0.000)    | 0.158 (0.016)    | 0 (0.000) |     2.63 | Annihilation, dobu, kabal, MiQ, yAmi |
|            1 |     2431 | 2024-08-01 | Rare Atom         | L   | 0.699      | -            | -                | -                | -         |   -14.32 | Annihilation, dobu, kabal, MiQ, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,000.00)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
