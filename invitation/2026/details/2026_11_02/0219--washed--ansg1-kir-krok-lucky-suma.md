### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [219](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  679.3<br />
<br />
Final Rank Value (679.3) = Starting Rank Value (666.0) + Head To Head Adjustments (13.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.0
- 400 + ( ( 0.142 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 666.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4720 | 2026-06-13 | MASONIC          | W   | 0.254      | 0.357        | 0.002 (0.000)    | 0.111 (0.010)    | 1 (0.254) |     4.38 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |     4741 | 2026-06-13 | MASQ             | W   | 0.252      | 0.357        | 0.000 (0.000)    | 0.016 (0.001)    | 1 (0.252) |     3.39 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |     4757 | 2026-06-13 | ex-Sashi Academy | W   | 0.251      | 0.357        | 0.000 (0.000)    | 0.087 (0.008)    | 1 (0.251) |     3.67 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |     4771 | 2026-06-12 | STATE            | L   | 0.248      | -            | -                | -                | -         |    -1.17 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |     4781 | 2026-06-12 | Invicta          | W   | 0.247      | 0.357        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.247) |     2.96 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,802.98)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.254 | $7,097.00      | $1,802.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
