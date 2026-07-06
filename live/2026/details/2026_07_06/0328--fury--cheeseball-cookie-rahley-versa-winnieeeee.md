### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [328](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [38]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  523.2<br />
<br />
Final Rank Value (523.2) = Starting Rank Value (506.4) + Head To Head Adjustments (16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 506.4


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
|            7 |     1672 | 2026-05-01 | Abyssal      | L   | 0.758      | -            | -                | -                | -         |    -5.92 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            6 |     1708 | 2026-04-30 | MARKandLARRY | W   | 0.752      | 0.278        | 0.001 (0.000)    | 0.155 (0.032)    | 0 (0.000) |    15.41 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            5 |     1760 | 2026-04-29 | Rooster      | W   | 0.744      | 0.278        | 0.009 (0.002)    | 0.394 (0.081)    | 0 (0.000) |    18.72 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            4 |     1794 | 2026-04-28 | Skele        | W   | 0.739      | 0.278        | 0.000 (0.000)    | 0.050 (0.010)    | 0 (0.000) |    12.77 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            3 |     1913 | 2026-04-26 | low cortisol | L   | 0.725      | -            | -                | -                | -         |   -14.08 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            2 |     5107 | 2026-02-18 | BBBMBCBS     | L   | 0.279      | -            | -                | -                | -         |    -4.64 | cheeseball, cookie, rekonz, SkulL, versa      |
|            1 |     5179 | 2026-02-16 | Time Waves   | L   | 0.271      | -            | -                | -                | -         |    -5.48 | cheeseball, cookie, rekonz, SkulL, versa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
