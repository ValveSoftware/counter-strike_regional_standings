### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [141](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  653.6<br />
<br />
Final Rank Value (653.6) = Starting Rank Value (637.0) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.0
- 400 + ( ( 0.131 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 637.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2501 | 2024-12-21 | Monte             | W   | 0.300      | 0.333        | 0.005 (0.001)    | 0.493 (0.049)    | 0 (0.000) |     6.05 | Forester, Krad, nota, topo, TRAVIS |
|            6 |     2509 | 2024-12-20 | FORZE Reload      | W   | 0.293      | 0.333        | 0.005 (0.000)    | 0.078 (0.008)    | 0 (0.000) |     4.51 | Forester, Krad, nota, topo, TRAVIS |
|            5 |     2527 | 2024-12-19 | BC.Game           | W   | 0.285      | 0.333        | 0.006 (0.001)    | 0.059 (0.006)    | 0 (0.000) |     4.61 | Forester, Krad, nota, topo, TRAVIS |
|            4 |     2590 | 2024-12-14 | ENCE              | L   | 0.255      | -            | -                | -                | -         |    -0.90 | Forester, Krad, nota, topo, TRAVIS |
|            3 |     2622 | 2024-12-13 | moneyF            | W   | 0.247      | 0.435        | 0.000 (0.000)    | 0.126 (0.014)    | 0 (0.000) |     2.64 | Forester, Krad, nota, topo, TRAVIS |
|            2 |     3387 | 2024-11-08 | 9INE              | L   | 0.014      | -            | -                | -                | -         |    -0.26 | Forester, Krad, nota, topo, TRAVIS |
|            1 |     3407 | 2024-11-07 | Gaimin Gladiators | L   | 0.007      | -            | -                | -                | -         |    -0.09 | Forester, Krad, nota, topo, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,019.39)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.300 | $5,000.00      | $1,498.59       |
| 2024-12-15 |      0.260 | $2,000.00      | $520.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
