### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rekonz, SkulL, versa<br />
Global Rank: [341](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  469.7<br />
<br />
Final Rank Value (469.7) = Starting Rank Value (494.2) + Head To Head Adjustments (-24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.2
- 400 + ( ( 0.048 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 494.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2363 | 2026-02-18 | BBBMBCBS        | L   | 0.886      | -            | -                | -                | -         |   -15.85 | cheeseball, cookie, rekonz, SkulL, versa  |
|            9 |     2435 | 2026-02-16 | Time Waves      | L   | 0.878      | -            | -                | -                | -         |   -15.73 | cheeseball, cookie, rekonz, SkulL, versa  |
|            8 |     4014 | 2025-12-07 | Rooster         | L   | 0.398      | -            | -                | -                | -         |    -1.43 | cheeseball, cookie, rekonz, SkulL, versa  |
|            7 |     4015 | 2025-12-06 | Ground Zero     | L   | 0.398      | -            | -                | -                | -         |    -0.69 | cheeseball, cookie, rahley, rekonz, SkulL |
|            6 |     4017 | 2025-12-06 | Animus Victoria | W   | 0.397      | 0.303        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     6.01 | cheeseball, cookie, rahley, rekonz, SkulL |
|            5 |     4294 | 2025-11-25 | LITE            | L   | 0.319      | -            | -                | -                | -         |    -3.50 | BRACE, cookie, rekonz, SkulL, versa       |
|            4 |     4358 | 2025-11-23 | Rooster         | W   | 0.305      | 0.314        | 0.006 (0.001)    | 0.229 (0.022)    | 0 (0.000) |     8.56 | BRACE, cookie, rekonz, SkulL, versa       |
|            3 |     4385 | 2025-11-22 | Mindfreak       | L   | 0.299      | -            | -                | -                | -         |    -0.61 | BRACE, cheeseball, cookie, rekonz, SkulL  |
|            2 |     5366 | 2025-10-24 | Rooster         | L   | 0.105      | -            | -                | -                | -         |    -1.08 | cheeseball, cookie, rekonz, SkulL, versa  |
|            1 |     5413 | 2025-10-23 | Ground Zero     | L   | 0.099      | -            | -                | -                | -         |    -0.18 | BRACE, cheeseball, cookie, rekonz, SkulL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
