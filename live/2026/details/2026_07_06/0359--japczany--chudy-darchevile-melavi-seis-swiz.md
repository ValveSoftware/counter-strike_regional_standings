### Roster Details<br />
Team Name: japczany<br />
Roster: chudy, darchevile, Melavi, sEIS, swiz<br />
Global Rank: [359](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [224]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  473.8<br />
<br />
Final Rank Value (473.8) = Starting Rank Value (477.8) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.8
- 400 + ( ( 0.041 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 477.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2032 | 2026-04-24 | Eternal Fire       | L   | 0.711      | -            | -                | -                | -         |    -0.80 | Bambosh, chudy, darchevile, Melavi, sEIS |
|            6 |     2096 | 2026-04-22 | Lilmix             | L   | 0.699      | -            | -                | -                | -         |    -3.20 | Bambosh, chudy, darchevile, Melavi, sEIS |
|            5 |     5949 | 2026-01-25 | UNiTY              | L   | 0.119      | -            | -                | -                | -         |    -0.66 | chudy, darchevile, Melavi, sEIS, swiz    |
|            4 |     6035 | 2026-01-23 | ex-Fingers Crossed | L   | 0.106      | -            | -                | -                | -         |    -1.41 | chudy, darchevile, Melavi, sEIS, swiz    |
|            3 |     6281 | 2026-01-16 | cirahvi            | W   | 0.060      | 0.333        | 0.004 (0.000)    | 0.394 (0.008)    | 0 (0.000) |     1.48 | chudy, darchevile, Melavi, sEIS, swiz    |
|            2 |     6358 | 2026-01-14 | ex-FUT Academy     | W   | 0.046      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.57 | chudy, darchevile, Melavi, sEIS, swiz    |
|            1 |     6406 | 2026-01-10 | MASONIC            | L   | 0.019      | -            | -                | -                | -         |    -0.01 | chudy, darchevile, Melavi, sEIS, swiz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
