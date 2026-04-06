### Roster Details<br />
Team Name: F5<br />
Roster: bones, cmrn, Kermi, neight, Signal<br />
Global Rank: [205](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [45]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  741.4<br />
<br />
Final Rank Value (741.4) = Starting Rank Value (801.5) + Head To Head Adjustments (-60.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 801.5
- 400 + ( ( 0.205 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 801.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      402 | 2026-03-28 | Voca           | L   | 1.000      | -            | -                | -                | -         |    -1.27 | bones, cmrn, Kermi, neight, Signal |
|           23 |      417 | 2026-03-28 | FRZ            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.037 (0.013)    | 1 (1.000) |     5.96 | bones, cmrn, Kermi, neight, Signal |
|           22 |      436 | 2026-03-28 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -7.41 | bones, cmrn, Kermi, neight, Signal |
|           21 |      445 | 2026-03-28 | FRZ            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.037 (0.013)    | 1 (1.000) |     5.76 | bones, cmrn, Kermi, neight, Signal |
|           20 |      598 | 2026-03-24 | LAG            | L   | 1.000      | -            | -                | -                | -         |    -6.92 | bones, cmrn, Kermi, neight, Signal |
|           19 |      655 | 2026-03-23 | Wanted Goons   | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.168 (0.061)    | 0 (0.000) |    10.89 | bones, cmrn, Kermi, neight, Signal |
|           18 |      733 | 2026-03-22 | OverKnight     | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.075 (0.027)    | 0 (0.000) |     7.17 | bones, cmrn, Kermi, neight, Signal |
|           17 |      775 | 2026-03-21 | Surge          | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.037 (0.014)    | 0 (0.000) |     8.06 | bones, cmrn, Kermi, neight, Signal |
|           16 |      836 | 2026-03-20 | regain         | L   | 1.000      | -            | -                | -                | -         |   -18.15 | bones, cmrn, Kermi, neight, Signal |
|           15 |     1023 | 2026-03-16 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -8.52 | bones, cmrn, Kermi, neight, Signal |
|           14 |     1068 | 2026-03-15 | Mythic         | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.044 (0.006)    | 0 (0.000) |    10.21 | bones, cmrn, Kermi, neight, Signal |
|           13 |     2371 | 2026-02-17 | Fisher College | L   | 0.884      | -            | -                | -                | -         |    -6.63 | bones, cmrn, Kermi, neight, Signal |
|           12 |     2648 | 2026-02-12 | Chicken Coop   | L   | 0.850      | -            | -                | -                | -         |   -14.82 | bones, cmrn, Kermi, neight, Signal |
|           11 |     2721 | 2026-02-10 | FlyQuest RED   | W   | 0.837      | 0.333        | 0.007 (0.002)    | 0.072 (0.020)    | 0 (0.000) |     8.96 | bones, cmrn, Kermi, neight, Signal |
|           10 |     2785 | 2026-02-08 | mouse          | L   | 0.822      | -            | -                | -                | -         |   -20.90 | bones, Kermi, neight, Signal, vin3 |
|            9 |     2881 | 2026-02-05 | Outfit 49      | L   | 0.803      | -            | -                | -                | -         |   -15.82 | bones, cmrn, Kermi, neight, Signal |
|            8 |     2906 | 2026-02-04 | OverKnight     | L   | 0.796      | -            | -                | -                | -         |   -20.60 | bones, cmrn, Kermi, neight, Signal |
|            7 |     3728 | 2026-01-03 | KOLESIE        | L   | 0.584      | -            | -                | -                | -         |    -1.80 | bones, cmrn, Kermi, neight, Signal |
|            6 |     3730 | 2026-01-03 | Memeories      | W   | 0.583      | 0.323        | 0.000 (0.000)    | 0.037 (0.007)    | 1 (0.583) |     2.90 | bones, cmrn, Kermi, neight, Signal |
|            5 |     3734 | 2026-01-03 | KOLESIE        | L   | 0.582      | -            | -                | -                | -         |    -1.74 | bones, cmrn, Kermi, neight, Signal |
|            4 |     4712 | 2025-11-09 | BC.Game        | L   | 0.213      | -            | -                | -                | -         |    -0.33 | bones, cmrn, Kermi, neight, Signal |
|            3 |     4728 | 2025-11-08 | Chicken Coop   | W   | 0.210      | 0.333        | 0.017 (0.001)    | 0.186 (0.013)    | 1 (0.210) |     2.65 | bones, cmrn, Kermi, neight, Signal |
|            2 |     4734 | 2025-11-08 | Marsborne      | L   | 0.209      | -            | -                | -                | -         |    -0.44 | bones, cmrn, Kermi, neight, Signal |
|            1 |     4740 | 2025-11-08 | Chicken Coop   | W   | 0.208      | 0.333        | 0.017 (0.001)    | 0.186 (0.013)    | 1 (0.208) |     2.67 | bones, cmrn, Kermi, neight, Signal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
