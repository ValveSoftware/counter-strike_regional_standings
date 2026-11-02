### Roster Details<br />
Team Name: Club 333<br />
Roster: b1, kobruh, Marro, SecretAgent<br />
Global Rank: [266](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [57]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  609.3<br />
<br />
Final Rank Value (609.3) = Starting Rank Value (659.5) + Head To Head Adjustments (-50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.5
- 400 + ( ( 0.139 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 659.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      846 | 2026-10-09 | DETONATE        | L   | 1.000      | -            | -                | -                | -         |   -11.14 | AMC, b1, kobruh, Marro, SecretAgent         |
|           16 |      894 | 2026-10-08 | OverKnight      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.74 | AMC, b1, kobruh, Marro, SecretAgent         |
|           15 |      947 | 2026-10-07 | Zomblers        | L   | 1.000      | -            | -                | -                | -         |   -14.99 | AMC, b1, kobruh, Marro, SecretAgent         |
|           14 |     1596 | 2026-09-24 | Iowa Stormboar  | L   | 0.943      | -            | -                | -                | -         |   -14.01 | kobruh, Marro, Pol0, Pose1doNN, SecretAgent |
|           13 |     1661 | 2026-09-23 | Zomblers        | W   | 0.936      | 0.363        | 0.005 (0.002)    | 0.225 (0.076)    | 0 (0.000) |    15.51 | kobruh, Marro, Pol0, Pose1doNN, SecretAgent |
|           12 |     1733 | 2026-09-22 | DETONATE        | L   | 0.930      | -            | -                | -                | -         |   -11.69 | kobruh, Marro, Pol0, Pose1doNN, SecretAgent |
|           11 |     2948 | 2026-08-26 | New Legends     | L   | 0.749      | -            | -                | -                | -         |   -16.36 | b1, calamity, kobruh, Marro, SecretAgent    |
|           10 |     2997 | 2026-08-25 | FarmVille       | L   | 0.743      | -            | -                | -                | -         |   -16.66 | b1, calamity, kobruh, Marro, SecretAgent    |
|            9 |     4298 | 2026-07-09 | regain          | L   | 0.429      | -            | -                | -                | -         |    -4.74 | kobruh, MarKE, Marro, mason, SecretAgent    |
|            8 |     4377 | 2026-07-03 | Overtake Sector | W   | 0.389      | 0.303        | 0.023 (0.003)    | 0.460 (0.054)    | 0 (0.000) |     7.27 | kobruh, MarKE, Marro, mason, SecretAgent    |
|            7 |     4451 | 2026-06-29 | Beyond Limits   | W   | 0.363      | 0.303        | 0.000 (0.000)    | 0.051 (0.006)    | 0 (0.000) |     3.61 | kobruh, MarKE, Marro, mason, SecretAgent    |
|            6 |     4588 | 2026-06-21 | Chicken Coop    | L   | 0.309      | -            | -                | -                | -         |    -3.35 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |
|            5 |     4601 | 2026-06-20 | Villainous      | W   | 0.303      | 0.398        | 0.002 (0.000)    | 0.252 (0.030)    | 0 (0.000) |     5.34 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |
|            4 |     4616 | 2026-06-19 | Playing for fun | W   | 0.296      | 0.398        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.79 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |
|            3 |     4684 | 2026-06-14 | Olympus         | W   | 0.263      | 0.143        | 0.000 (0.000)    | 0.120 (0.005)    | 0 (0.000) |     2.62 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |
|            2 |     4848 | 2026-06-08 | Chicken Coop    | L   | 0.223      | -            | -                | -                | -         |    -2.42 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |
|            1 |     4897 | 2026-06-06 | raisedbypixels  | W   | 0.209      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.25 | 4TAYLOR, kobruh, laxiee, Marro, SecretAgent |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,964.09)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-09 |      0.429 | $1,500.00      | $644.17         |
| 2026-06-21 |      0.309 | $7,500.00      | $2,319.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
