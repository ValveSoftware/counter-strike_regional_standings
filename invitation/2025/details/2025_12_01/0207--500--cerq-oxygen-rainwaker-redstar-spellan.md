### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN<br />
Global Rank: [207](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  629.5<br />
<br />
Final Rank Value (629.5) = Starting Rank Value (627.7) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.7
- 400 + ( ( 0.120 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 627.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4173 | 2025-07-10 | ComeBack     | L   | 0.237      | -            | -                | -                | -         |    -3.26 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|            4 |     4328 | 2025-06-22 | FUT          | L   | 0.119      | -            | -                | -                | -         |    -0.02 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|            3 |     4347 | 2025-06-21 | ECLOT        | W   | 0.111      | 0.435        | 0.069 (0.003)    | 0.612 (0.030)    | 0 (0.000) |     3.31 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|            2 |     4357 | 2025-06-20 | HubaBuba     | W   | 0.106      | 0.435        | 0.001 (0.000)    | 0.149 (0.007)    | 0 (0.000) |     1.82 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |
|            1 |     4371 | 2025-06-19 | Gentle Mates | L   | 0.100      | -            | -                | -                | -         |    -0.02 | CeRq, oxygeN, Rainwaker, REDSTAR, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($601.31)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.120 | $5,000.00      | $601.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
