### Roster Details<br />
Team Name: BBBMBCBS<br />
Roster: ApeX, Dirty, Fitzy, HaZ, muffin<br />
Global Rank: [364](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  462.9<br />
<br />
Final Rank Value (462.9) = Starting Rank Value (481.7) + Head To Head Adjustments (-18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.7
- 400 + ( ( 0.043 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 481.7


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
|           14 |     2508 | 2026-04-05 | Skele             | L   | 0.585      | -            | -                | -                | -         |   -10.96 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           13 |     2756 | 2026-04-02 | Ding Cuts         | W   | 0.566      | 0.278        | 0.001 (0.000)    | 0.122 (0.019)    | 0 (0.000) |    12.31 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           12 |     2771 | 2026-04-02 | Time Waves        | L   | 0.565      | -            | -                | -                | -         |   -10.42 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           11 |     3503 | 2026-03-22 | MARKandLARRY      | L   | 0.492      | -            | -                | -                | -         |    -4.71 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|           10 |     3627 | 2026-03-20 | Muttley Crew      | L   | 0.478      | -            | -                | -                | -         |    -9.21 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            9 |     4794 | 2026-02-24 | Arcade            | L   | 0.318      | -            | -                | -                | -         |    -2.30 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            8 |     4909 | 2026-02-22 | Mindfreak         | L   | 0.305      | -            | -                | -                | -         |    -1.98 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            7 |     4957 | 2026-02-21 | Time Waves        | W   | 0.298      | 0.317        | 0.000 (0.000)    | 0.065 (0.006)    | 0 (0.000) |     3.72 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            6 |     5010 | 2026-02-20 | Shanghai Sharks   | W   | 0.292      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.48 | Arcay, Dirty, Fitzy, HaZ, muffin |
|            5 |     5012 | 2026-02-19 | Rooster           | L   | 0.291      | -            | -                | -                | -         |    -1.32 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            4 |     5107 | 2026-02-18 | FURY              | W   | 0.279      | 0.278        | 0.000 (0.000)    | 0.082 (0.006)    | 0 (0.000) |     4.64 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            3 |     5108 | 2026-02-18 | THUNDER dOWNUNDER | L   | 0.279      | -            | -                | -                | -         |    -0.23 | ApeX, Arcay, Fitzy, HaZ, muffin  |
|            2 |     5175 | 2026-02-17 | Exsto             | W   | 0.272      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.37 | ApeX, Dirty, Fitzy, HaZ, muffin  |
|            1 |     5177 | 2026-02-17 | Time Waves        | L   | 0.272      | -            | -                | -                | -         |    -5.15 | ApeX, Dirty, Fitzy, HaZ, muffin  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
