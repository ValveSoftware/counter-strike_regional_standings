### Roster Details<br />
Team Name: PURE<br />
Roster: emzijs, maty, OXFROG, Sh1karee, yakuza<br />
Global Rank: [342](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [218]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  503.6<br />
<br />
Final Rank Value (503.6) = Starting Rank Value (492.6) + Head To Head Adjustments (11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.6
- 400 + ( ( 0.049 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 492.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      312 | 2026-06-13 | aimclub    | L   | 1.000      | -            | -                | -                | -         |    -4.22 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            7 |      323 | 2026-06-13 | SAAB       | W   | 1.000      | 0.373        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    11.13 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            6 |      329 | 2026-06-13 | Nexus      | L   | 1.000      | -            | -                | -                | -         |    -3.99 | MAGILA, maty, Sh1karee, Toshas, yakuza |
|            5 |     1192 | 2026-05-16 | Honvéd     | L   | 0.861      | -            | -                | -                | -         |    -4.48 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            4 |     1203 | 2026-05-16 | MTX        | W   | 0.860      | 0.341        | 0.000 (0.000)    | 0.077 (0.023)    | 1 (0.860) |    16.97 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            3 |     1209 | 2026-05-16 | MASONIC    | L   | 0.859      | -            | -                | -                | -         |    -2.31 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            2 |     2555 | 2026-04-04 | Sangal     | L   | 0.580      | -            | -                | -                | -         |    -1.62 | emzijs, maty, OXFROG, Sh1karee, yakuza |
|            1 |     2571 | 2026-04-04 | Passion UA | L   | 0.579      | -            | -                | -                | -         |    -0.50 | emzijs, maty, OXFROG, Sh1karee, yakuza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
