### Roster Details<br />
Team Name: devils.one<br />
Roster: fanatyk, Frontsiderr, PeTeRoOo, suonko, ZEMO<br />
Global Rank: [185](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  638.0<br />
<br />
Final Rank Value (638.0) = Starting Rank Value (637.3) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.3
- 400 + ( ( 0.125 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 637.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1808 | 2024-10-29 | Kyoto         | L   | 0.414      | -            | -                | -                | -         |    -6.49 | fanatyk, Frontsiderr, PeTeRoOo, suonko, ZEMO      |
|            5 |     2895 | 2024-09-21 | 9 Pandas      | L   | 0.158      | -            | -                | -                | -         |    -0.74 | fanatyk, Frontsiderr, karmazynsz, Pelle, ZEMO     |
|            4 |     2919 | 2024-09-20 | Johnny Speeds | L   | 0.151      | -            | -                | -                | -         |    -0.94 | fanatyk, Frontsiderr, karmazynsz, Pelle, PeTeRoOo |
|            3 |     2948 | 2024-09-19 | BC.Game       | W   | 0.146      | 0.443        | 0.075 (0.005)    | 0.863 (0.056)    | 0 (0.000) |     4.05 | fanatyk, Frontsiderr, Pelle, suonko, ZEMO         |
|            2 |     3095 | 2024-09-14 | 9INE          | W   | 0.112      | 0.443        | 0.013 (0.001)    | 0.315 (0.016)    | 0 (0.000) |     2.30 | fanatyk, Frontsiderr, Pelle, suonko, ZEMO         |
|            1 |     3114 | 2024-09-14 | RUSH B        | W   | 0.111      | 0.443        | 0.026 (0.001)    | 0.526 (0.026)    | 0 (0.000) |     2.60 | fanatyk, Frontsiderr, Pelle, PeTeRoOo, ZEMO       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($355.84)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-24 |      0.178 | $2,000.00      | $355.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
