### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [315](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_05_04.md)<br />
Regional Rank: [43]( ../../standings_asia_2026_05_04.md)<br />
<br />
Final Rank Value:  526.5<br />
<br />
Final Rank Value (526.5) = Starting Rank Value (509.8) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.8
- 400 + ( ( 0.059 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 509.8


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
|           10 |       77 | 2026-05-01 | Abyssal      | L   | 1.000      | -            | -                | -                | -         |    -5.42 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            9 |      104 | 2026-04-30 | MARKandLARRY | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.125 (0.035)    | 0 (0.000) |    17.58 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            8 |      148 | 2026-04-29 | Rooster      | W   | 1.000      | 0.278        | 0.010 (0.003)    | 0.426 (0.118)    | 0 (0.000) |    26.63 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            7 |      172 | 2026-04-28 | Skele        | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.083 (0.023)    | 0 (0.000) |    19.61 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            6 |      286 | 2026-04-26 | low cortisol | L   | 1.000      | -            | -                | -                | -         |   -18.70 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            5 |     3460 | 2026-02-18 | BBBMBCBS     | L   | 0.699      | -            | -                | -                | -         |   -10.89 | cheeseball, cookie, rekonz, SkulL, versa      |
|            4 |     3532 | 2026-02-16 | Time Waves   | L   | 0.691      | -            | -                | -                | -         |   -13.31 | cheeseball, cookie, rekonz, SkulL, versa      |
|            3 |     5111 | 2025-12-07 | Rooster      | L   | 0.211      | -            | -                | -                | -         |    -0.66 | cheeseball, cookie, rekonz, SkulL, versa      |
|            2 |     5112 | 2025-12-06 | Ground Zero  | L   | 0.211      | -            | -                | -                | -         |    -0.53 | cheeseball, cookie, rahley, rekonz, SkulL     |
|            1 |     5114 | 2025-12-06 | low cortisol | W   | 0.210      | 0.303        | 0.000 (0.000)    | 0.067 (0.004)    | 0 (0.000) |     2.34 | cheeseball, cookie, rahley, rekonz, SkulL     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
