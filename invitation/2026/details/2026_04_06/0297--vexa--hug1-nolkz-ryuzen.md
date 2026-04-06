### Roster Details<br />
Team Name: VEXA<br />
Roster: hug1, nolkz, ryuzen<br />
Global Rank: [297](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [78]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  563.1<br />
<br />
Final Rank Value (563.1) = Starting Rank Value (540.9) + Head To Head Adjustments (22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.9
- 400 + ( ( 0.072 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 540.9


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
|            6 |      737 | 2026-03-22 | GameHunters    | L   | 1.000      | -            | -                | -                | -         |    -4.17 | hug1, nolkz, rainny, ryuzen, zock9 |
|            5 |      801 | 2026-03-21 | Isurus         | W   | 1.000      | 0.363        | 0.056 (0.020)    | 0.475 (0.172)    | 0 (0.000) |    27.98 | hug1, nolkz, rainny, ryuzen, zock9 |
|            4 |      840 | 2026-03-20 | LP             | L   | 1.000      | -            | -                | -                | -         |    -1.47 | hug1, nolkz, rainny, ryuzen, zock9 |
|            3 |     5658 | 2025-10-12 | Crashers       | L   | 0.027      | -            | -                | -                | -         |    -0.40 | hug1, KLR, nolkz, ryuzen, souz4h   |
|            2 |     5718 | 2025-10-10 | R2             | W   | 0.013      | 0.371        | 0.004 (0.000)    | 0.360 (0.002)    | 0 (0.000) |     0.30 | hug1, KLR, nolkz, ryuzen, souz4h   |
|            1 |     5786 | 2025-10-08 | Bounty Hunters | L   | 0.002      | -            | -                | -                | -         |    -0.00 | hug1, KLR, nolkz, ryuzen, souz4h   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
