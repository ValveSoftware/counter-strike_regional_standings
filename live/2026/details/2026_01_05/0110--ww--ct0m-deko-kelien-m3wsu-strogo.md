### Roster Details<br />
Team Name: WW<br />
Roster: ct0m, deko, kelieN, m3wsu, StRoGo<br />
Global Rank: [110](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  895.2<br />
<br />
Final Rank Value (895.2) = Starting Rank Value (855.0) + Head To Head Adjustments (40.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.301[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 855.0
- 400 + ( ( 0.229 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 855.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      326 | 2025-12-07 | GUN5     | L   | 1.000      | -            | -                | -                | -         |    -4.59 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            6 |      342 | 2025-12-06 | NOVAQ    | W   | 1.000      | 0.331        | 0.018 (0.006)    | 0.826 (0.274)    | 1 (1.000) |    20.06 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            5 |      355 | 2025-12-06 | GUN5     | L   | 0.999      | -            | -                | -                | -         |    -4.13 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            4 |      597 | 2025-11-25 | K27      | L   | 0.927      | -            | -                | -                | -         |    -2.45 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            3 |      603 | 2025-11-25 | Nemesis  | W   | 0.926      | 0.371        | 0.012 (0.004)    | 0.312 (0.107)    | 1 (0.926) |    17.93 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            2 |      630 | 2025-11-24 | Sangal   | L   | 0.920      | -            | -                | -                | -         |    -5.48 | ct0m, deko, kelieN, m3wsu, StRoGo |
|            1 |      639 | 2025-11-24 | Nemesis  | W   | 0.920      | 0.371        | 0.012 (0.004)    | 0.312 (0.106)    | 1 (0.920) |    18.95 | ct0m, deko, kelieN, m3wsu, StRoGo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,375.89)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-07 |      1.000 | $1,442.00      | $1,442.00       |
| 2025-11-26 |      0.934 | $1,000.00      | $933.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
