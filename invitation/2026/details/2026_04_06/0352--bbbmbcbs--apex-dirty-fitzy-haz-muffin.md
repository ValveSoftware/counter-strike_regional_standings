### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Dirty, Fitzy, HaZ, muffin<br />
Global Rank: [352](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [46]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  431.4<br />
<br />
Final Rank Value (431.4) = Starting Rank Value (418.4) + Head To Head Adjustments (13.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 418.4
- 400 + ( ( 0.009 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 418.4


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
|           14 |      764 | 2026-03-22 | MARKandLARRY      | L   | 1.000      | -            | -                | -                | -         |   -12.81 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           13 |      884 | 2026-03-20 | Muttley Crew      | L   | 1.000      | -            | -                | -                | -         |   -14.11 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           12 |     2051 | 2026-02-24 | Arcade            | L   | 0.925      | -            | -                | -                | -         |    -2.76 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           11 |     2166 | 2026-02-22 | Mindfreak         | L   | 0.912      | -            | -                | -                | -         |    -1.52 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           10 |     2213 | 2026-02-21 | Time Waves        | W   | 0.905      | 0.317        | 0.000 (0.000)    | 0.091 (0.026)    | 0 (0.000) |    14.61 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            9 |     2266 | 2026-02-20 | Shanghai Sharks   | W   | 0.898      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.83 | Arcay, Dirty, Fitzy, HaZ, muffin |
|            8 |     2268 | 2026-02-19 | Rooster           | L   | 0.898      | -            | -                | -                | -         |    -2.33 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            7 |     2363 | 2026-02-18 | FURY              | W   | 0.886      | 0.278        | 0.000 (0.000)    | 0.021 (0.005)    | 0 (0.000) |    15.85 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            6 |     2364 | 2026-02-18 | THUNDER dOWNUNDER | L   | 0.885      | -            | -                | -                | -         |    -0.20 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            5 |     2431 | 2026-02-17 | Exsto             | W   | 0.879      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.02 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            4 |     2433 | 2026-02-17 | Time Waves        | L   | 0.878      | -            | -                | -                | -         |   -12.20 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            3 |     4215 | 2025-11-29 | Arcade            | L   | 0.345      | -            | -                | -                | -         |    -0.67 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            2 |     4220 | 2025-11-29 | Rooster           | L   | 0.345      | -            | -                | -                | -         |    -0.83 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            1 |     4222 | 2025-11-28 | blingus           | W   | 0.344      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.344) |     5.11 | ApeX, Dirty, Fitzy, HaZ, muffin  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
