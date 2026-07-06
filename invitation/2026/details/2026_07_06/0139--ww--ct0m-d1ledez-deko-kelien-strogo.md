### Roster Details<br />
Team Name: WW<br />
Roster: ct0m, d1Ledez, deko, kelieN, StRoGo<br />
Global Rank: [139](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  861.5<br />
<br />
Final Rank Value (861.5) = Starting Rank Value (824.9) + Head To Head Adjustments (36.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 824.9
- 400 + ( ( 0.225 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 824.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2480 | 2026-04-05 | K27        | W   | 0.587      | 0.435        | 0.084 (0.021)    | 0.677 (0.173)    | 1 (0.587) |    16.86 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            5 |     2491 | 2026-04-05 | 1win       | L   | 0.586      | -            | -                | -                | -         |    -2.60 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            4 |     2538 | 2026-04-04 | Nemiga     | W   | 0.581      | 0.435        | 0.111 (0.028)    | 0.774 (0.196)    | 1 (0.581) |    16.05 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            3 |     2600 | 2026-04-03 | ARCRED     | W   | 0.576      | 0.435        | 0.021 (0.005)    | 0.447 (0.112)    | 1 (0.576) |    15.06 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            2 |     2609 | 2026-04-03 | Younglings | W   | 0.575      | 0.435        | 0.000 (0.000)    | 0.014 (0.003)    | 1 (0.575) |     1.82 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            1 |     2630 | 2026-04-03 | HOTU       | L   | 0.574      | -            | -                | -                | -         |   -10.67 | ct0m, d1Ledez, deko, kelieN, StRoGo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,937.92)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.588 | $5,000.00      | $2,937.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
