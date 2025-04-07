### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN<br />
Global Rank: [183](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  627.1<br />
<br />
Final Rank Value (627.1) = Starting Rank Value (643.1) + Head To Head Adjustments (-16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.1
- 400 + ( ( 0.132 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 643.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      942 | 2025-02-28 | Victores Sumus | L   | 0.945      | -            | -                | -                | -         |   -10.51 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |      962 | 2025-02-27 | Flshbck        | L   | 0.938      | -            | -                | -                | -         |   -10.83 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     1855 | 2024-12-14 | Gods Reign     | L   | 0.438      | -            | -                | -                | -         |    -3.75 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     1857 | 2024-12-14 | st4rboys       | W   | 0.438      | 0.262        | 0.001 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     6.27 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     2391 | 2024-11-17 | Flshbck        | L   | 0.258      | -            | -                | -                | -         |    -3.13 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            1 |     2417 | 2024-11-16 | Gods Reign     | W   | 0.252      | 0.289        | 0.017 (0.001)    | 0.280 (0.020)    | 1 (0.252) |     5.89 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,077.64)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.952 | $576.00        | $548.28         |
| 2024-12-14 |      0.438 | $500.00        | $219.17         |
| 2024-11-17 |      0.258 | $1,200.00      | $310.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
