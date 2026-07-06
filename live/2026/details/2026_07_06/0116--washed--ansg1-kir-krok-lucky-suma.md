### Roster Details<br />
Team Name: Washed<br />
Roster: ANSG1, kiR, kroK, Lucky, suma<br />
Global Rank: [116](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [78]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  920.8<br />
<br />
Final Rank Value (920.8) = Starting Rank Value (883.6) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.418[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 883.6
- 400 + ( ( 0.257 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 883.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      301 | 2026-06-13 | MASONIC       | W   | 1.000      | 0.357        | 0.011 (0.004)    | 0.498 (0.178)    | 1 (1.000) |    15.36 | ANSG1, kiR, kroK, Lucky, suma |
|            4 |      322 | 2026-06-13 | MASQ          | W   | 1.000      | 0.357        | 0.001 (0.001)    | 0.074 (0.026)    | 1 (1.000) |    10.15 | ANSG1, kiR, kroK, Lucky, suma |
|            3 |      338 | 2026-06-13 | Sashi Academy | W   | 1.000      | 0.357        | 0.003 (0.001)    | 0.153 (0.055)    | 1 (1.000) |    12.11 | ANSG1, kiR, kroK, Lucky, suma |
|            2 |      352 | 2026-06-12 | STATE         | L   | 1.000      | -            | -                | -                | -         |    -7.22 | ANSG1, kiR, kroK, Lucky, suma |
|            1 |      362 | 2026-06-12 | Invicta       | W   | 1.000      | 0.357        | 0.001 (0.001)    | 0.033 (0.012)    | 1 (1.000) |     6.79 | ANSG1, kiR, kroK, Lucky, suma |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,097.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      1.000 | $7,097.00      | $7,097.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
