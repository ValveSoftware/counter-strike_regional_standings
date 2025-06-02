### Roster Details<br />
Team Name: anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [136](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [39]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  698.9<br />
<br />
Final Rank Value (698.9) = Starting Rank Value (667.0) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.0
- 400 + ( ( 0.146 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 667.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      260 | 2025-05-14 | Wildcard         | L   | 1.000      | -            | -                | -                | -         |    -3.86 | cypress, FAME, K4mr0, mcniff, Slash  |
|            8 |      320 | 2025-05-12 | MIGHT            | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.315 (0.121)    | 0 (0.000) |    14.57 | Calix, cypress, K4mr0, mcniff, Slash |
|            7 |      375 | 2025-05-10 | Legacy           | L   | 1.000      | -            | -                | -                | -         |    -4.72 | cypress, FAME, K4mr0, mcniff, Slash  |
|            6 |      417 | 2025-05-08 | MIGHT            | W   | 1.000      | 0.384        | 0.002 (0.001)    | 0.315 (0.121)    | 0 (0.000) |    14.63 | cypress, FAME, K4mr0, mcniff, Slash  |
|            5 |     1716 | 2025-03-23 | LOBOARMY         | L   | 0.734      | -            | -                | -                | -         |   -10.34 | cypress, FAME, K4mr0, mcniff, Slash  |
|            4 |     1761 | 2025-03-21 | Marca Registrada | W   | 0.721      | 0.372        | 0.005 (0.001)    | 0.110 (0.029)    | 0 (0.000) |    10.53 | cypress, FAME, K4mr0, mcniff, Slash  |
|            3 |     1801 | 2025-03-19 | Tsunami          | W   | 0.707      | 0.372        | 0.003 (0.001)    | 0.134 (0.035)    | 0 (0.000) |    10.29 | cypress, FAME, K4mr0, mcniff, Slash  |
|            2 |     1891 | 2025-03-17 | Wanted Goons     | W   | 0.694      | 0.372        | 0.002 (0.001)    | 0.156 (0.040)    | 0 (0.000) |    10.98 | cypress, FAME, K4mr0, mcniff, Slash  |
|            1 |     2030 | 2025-03-10 | Marca Registrada | L   | 0.647      | -            | -                | -                | -         |   -10.23 | cypress, FAME, K4mr0, mcniff, Slash  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,158.35)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.734 | $4,300.00      | $3,158.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
