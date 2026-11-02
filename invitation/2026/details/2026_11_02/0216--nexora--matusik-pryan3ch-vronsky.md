### Roster Details<br />
Team Name: NEXORA<br />
Roster: matusik, Pryan3ch, VRONSKY<br />
Global Rank: [216](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  682.9<br />
<br />
Final Rank Value (682.9) = Starting Rank Value (702.0) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.0
- 400 + ( ( 0.161 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 702.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      302 | 2026-10-22 | K27          | L   | 1.000      | -            | -                | -                | -         |    -0.48 | hurtfrisk, matusik, Pryan3ch, torox, VRONSKY |
|            7 |      420 | 2026-10-20 | TrafficPills | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.059 (0.025)    | 1 (1.000) |    10.83 | hurtfrisk, matusik, Pryan3ch, torox, VRONSKY |
|            6 |      435 | 2026-10-20 | FN           | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.62 | hurtfrisk, matusik, Pryan3ch, torox, VRONSKY |
|            5 |      438 | 2026-10-20 | TrafficPills | L   | 1.000      | -            | -                | -                | -         |   -20.84 | hurtfrisk, matusik, Pryan3ch, torox, VRONSKY |
|            4 |     2071 | 2026-09-14 | BERG         | L   | 0.874      | -            | -                | -                | -         |   -16.15 | LE4R, matusik, Pryan3ch, tokyoshi, VRONSKY   |
|            3 |     2199 | 2026-09-11 | LFO 7        | W   | 0.854      | 0.357        | 0.001 (0.000)    | 0.047 (0.014)    | 0 (0.000) |     9.40 | LE4R, matusik, Pryan3ch, tokyoshi, VRONSKY   |
|            2 |     2319 | 2026-09-09 | ROUNDS       | W   | 0.841      | 0.357        | 0.000 (0.000)    | 0.104 (0.031)    | 0 (0.000) |     7.32 | LE4R, matusik, Pryan3ch, tokyoshi, VRONSKY   |
|            1 |     2504 | 2026-09-05 | Drama        | L   | 0.814      | -            | -                | -                | -         |   -14.78 | LE4R, matusik, Pryan3ch, tokyoshi, VRONSKY   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-23 |      1.000 | $750.00        | $750.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
