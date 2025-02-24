### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: Burmylov, Neityu, PR, TOBIZ, xelex<br />
Global Rank: [239](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [140]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  568.3<br />
<br />
Final Rank Value (568.3) = Starting Rank Value (568.9) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.207[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 568.9
- 400 + ( ( 0.089 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 568.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3241 | 2024-09-10 | Sampi       | L   | 0.084      | -            | -                | -                | -         |    -0.58 | Burmylov, Neityu, PR, TOBIZ, xelex |
|            4 |     3258 | 2024-09-09 | ECLOT       | L   | 0.078      | -            | -                | -                | -         |    -0.13 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            3 |     3266 | 2024-09-08 | ZEROvariant | W   | 0.073      | 0.372        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.64 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            2 |     3358 | 2024-09-05 | HOTU        | L   | 0.053      | -            | -                | -                | -         |    -0.66 | Burmylov, Neityu, PR, sirah, TOBIZ |
|            1 |     3569 | 2024-08-29 | TSM         | W   | 0.004      | 0.384        | 0.009 (0.000)    | 0.186 (0.000)    | 0 (0.000) |     0.10 | Burmylov, Neityu, PR, sirah, TOBIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($56.27)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.113 | $500.00        | $56.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
