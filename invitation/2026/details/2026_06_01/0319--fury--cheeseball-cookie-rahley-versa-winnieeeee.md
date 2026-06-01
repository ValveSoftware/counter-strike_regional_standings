### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [319](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  523.6<br />
<br />
Final Rank Value (523.6) = Starting Rank Value (505.8) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.8
- 400 + ( ( 0.056 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 505.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1011 | 2026-05-01 | Abyssal      | L   | 0.991      | -            | -                | -                | -         |    -6.13 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            9 |     1047 | 2026-04-30 | MARKandLARRY | W   | 0.985      | 0.278        | 0.000 (0.000)    | 0.104 (0.029)    | 0 (0.000) |    16.75 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            8 |     1099 | 2026-04-29 | Rooster      | W   | 0.977      | 0.278        | 0.006 (0.002)    | 0.348 (0.094)    | 0 (0.000) |    25.34 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            7 |     1133 | 2026-04-28 | Skele        | W   | 0.972      | 0.278        | 0.000 (0.000)    | 0.068 (0.018)    | 0 (0.000) |    18.07 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            6 |     1252 | 2026-04-26 | low cortisol | L   | 0.958      | -            | -                | -                | -         |   -17.94 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            5 |     4446 | 2026-02-18 | BBBMBCBS     | L   | 0.512      | -            | -                | -                | -         |    -8.24 | cheeseball, cookie, rekonz, SkulL, versa      |
|            4 |     4518 | 2026-02-16 | Time Waves   | L   | 0.504      | -            | -                | -                | -         |   -10.07 | cheeseball, cookie, rekonz, SkulL, versa      |
|            3 |     6097 | 2025-12-07 | Rooster      | L   | 0.025      | -            | -                | -                | -         |    -0.10 | cheeseball, cookie, rekonz, SkulL, versa      |
|            2 |     6098 | 2025-12-06 | Ground Zero  | L   | 0.024      | -            | -                | -                | -         |    -0.06 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            1 |     6100 | 2025-12-06 | low cortisol | W   | 0.023      | 0.303        | 0.000 (0.000)    | 0.064 (0.000)    | 0 (0.000) |     0.26 | cheeseball, cookie, rahley, rekonz, SkulL     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
