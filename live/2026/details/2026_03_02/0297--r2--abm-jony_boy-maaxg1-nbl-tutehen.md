### Roster Details<br />
Team Name: R2<br />
Roster: ABM, JonY BoY, maaxg1, nbl, tutehen<br />
Global Rank: [297](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [83]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  510.1<br />
<br />
Final Rank Value (510.1) = Starting Rank Value (521.9) + Head To Head Adjustments (-11.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.9
- 400 + ( ( 0.064 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 521.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      618 | 2026-02-15 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -3.19 | ABM, guidimon, maaxg1, toto, tutehen |
|            8 |     3366 | 2025-10-25 | Fake do Biru   | L   | 0.348      | -            | -                | -                | -         |    -1.14 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            7 |     3479 | 2025-10-23 | Galorys        | L   | 0.335      | -            | -                | -                | -         |    -1.52 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            6 |     3773 | 2025-10-11 | 9z             | L   | 0.254      | -            | -                | -                | -         |    -0.92 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            5 |     3790 | 2025-10-10 | ShindeN        | W   | 0.249      | 0.396        | 0.040 (0.004)    | 0.522 (0.052)    | 1 (0.249) |     7.59 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            4 |     3802 | 2025-10-10 | ShindeN        | L   | 0.247      | -            | -                | -                | -         |    -0.25 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            3 |     3818 | 2025-10-10 | VEXA           | L   | 0.246      | -            | -                | -                | -         |    -5.10 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            2 |     3897 | 2025-10-08 | MAGICOS        | L   | 0.234      | -            | -                | -                | -         |    -4.91 | ABM, JonY BoY, maaxg1, nbl, tutehen  |
|            1 |     4005 | 2025-10-06 | Players        | L   | 0.221      | -            | -                | -                | -         |    -2.31 | ABM, JonY BoY, maaxg1, nbl, tutehen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
