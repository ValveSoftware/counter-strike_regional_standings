### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Dirty, Fitzy, HaZ, muffin<br />
Global Rank: [300](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  508.5<br />
<br />
Final Rank Value (508.5) = Starting Rank Value (497.3) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.141[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.3
- 400 + ( ( 0.051 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 497.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      226 | 2026-02-24 | Underground       | L   | 1.000      | -            | -                | -                | -         |    -9.20 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           14 |      320 | 2026-02-22 | Mindfreak         | L   | 1.000      | -            | -                | -                | -         |    -4.54 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           13 |      356 | 2026-02-21 | Time Waves        | W   | 1.000      | 0.317        | 0.000 (0.000)    | 0.136 (0.043)    | 0 (0.000) |    14.00 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           12 |      405 | 2026-02-20 | Shanghai Sharks   | W   | 1.000      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.26 | Arcay, Dirty, Fitzy, HaZ, muffin |
|           11 |      407 | 2026-02-19 | Rooster           | L   | 1.000      | -            | -                | -                | -         |    -5.97 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           10 |      501 | 2026-02-18 | FURY              | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.053 (0.015)    | 0 (0.000) |    14.94 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            9 |      502 | 2026-02-18 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -3.20 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            8 |      568 | 2026-02-17 | Exsto             | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.77 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            7 |      570 | 2026-02-17 | Time Waves        | L   | 1.000      | -            | -                | -                | -         |   -16.00 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            6 |     2315 | 2025-11-29 | Underground       | L   | 0.578      | -            | -                | -                | -         |    -4.62 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            5 |     2320 | 2025-11-29 | Rooster           | L   | 0.578      | -            | -                | -                | -         |    -3.15 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            4 |     2322 | 2025-11-28 | blingus           | W   | 0.577      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.577) |     6.57 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            3 |     4381 | 2025-09-28 | Skele             | L   | 0.165      | -            | -                | -                | -         |    -1.68 | ApeX, biebs, Fitzy, HaZ, muffin  |
|            2 |     4385 | 2025-09-27 | Underground       | W   | 0.164      | 0.302        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     3.12 | ApeX, biebs, Fitzy, HaZ, muffin  |
|            1 |     4389 | 2025-09-27 | Ground Zero       | L   | 0.163      | -            | -                | -                | -         |    -1.07 | ApeX, biebs, Fitzy, HaZ, muffin  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
