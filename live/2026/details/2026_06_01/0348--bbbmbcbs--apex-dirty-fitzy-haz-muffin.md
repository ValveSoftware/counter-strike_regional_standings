### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Dirty, Fitzy, HaZ, muffin<br />
Global Rank: [348](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  461.7<br />
<br />
Final Rank Value (461.7) = Starting Rank Value (487.2) + Head To Head Adjustments (-25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.2
- 400 + ( ( 0.046 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 487.2


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
|           14 |     1847 | 2026-04-05 | Skele             | L   | 0.818      | -            | -                | -                | -         |   -15.22 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           13 |     2095 | 2026-04-02 | Ding Cuts         | W   | 0.799      | 0.278        | 0.001 (0.000)    | 0.138 (0.031)    | 0 (0.000) |    16.15 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           12 |     2110 | 2026-04-02 | Time Waves        | L   | 0.798      | -            | -                | -                | -         |   -14.38 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           11 |     2842 | 2026-03-22 | MARKandLARRY      | L   | 0.725      | -            | -                | -                | -         |   -10.15 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           10 |     2966 | 2026-03-20 | Muttley Crew      | L   | 0.711      | -            | -                | -                | -         |   -11.29 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            9 |     4133 | 2026-02-24 | Arcade            | L   | 0.551      | -            | -                | -                | -         |    -3.21 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            8 |     4248 | 2026-02-22 | Mindfreak         | L   | 0.538      | -            | -                | -                | -         |    -2.64 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            7 |     4296 | 2026-02-21 | Time Waves        | W   | 0.531      | 0.317        | 0.000 (0.000)    | 0.090 (0.015)    | 0 (0.000) |     6.62 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            6 |     4349 | 2026-02-20 | Shanghai Sharks   | W   | 0.525      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.96 | Arcay, Dirty, Fitzy, HaZ, muffin |
|            5 |     4351 | 2026-02-19 | Rooster           | L   | 0.524      | -            | -                | -                | -         |    -2.07 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            4 |     4446 | 2026-02-18 | FURY              | W   | 0.512      | 0.278        | 0.000 (0.000)    | 0.099 (0.014)    | 0 (0.000) |     8.24 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            3 |     4447 | 2026-02-18 | THUNDER dOWNUNDER | L   | 0.512      | -            | -                | -                | -         |    -0.31 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            2 |     4514 | 2026-02-17 | Exsto             | W   | 0.505      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.18 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            1 |     4516 | 2026-02-17 | Time Waves        | L   | 0.505      | -            | -                | -                | -         |    -9.49 | ApeX, Dirty, Fitzy, HaZ, muffin  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
