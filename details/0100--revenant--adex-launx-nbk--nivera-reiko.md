### Roster Details<br />
Team Name: Revenant<br />
Roster: adeX, lauNX, NBK-, Nivera, reiko<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [72]( ../standings_europe.md)<br />
Final Rank Value:  905.7<br />
<br />
Final Rank Value (905.7) = Starting Rank Value (842.0) + Head To Head Adjustments (63.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 842.0
- 400 + ( ( 0.206 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 842.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      156 | 2024-07-12 | Verdant         | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.316 (0.117)    | 0 (0.000) |    12.34 | adeX, lauNX, NBK-, Nivera, reiko |
|           14 |      216 | 2024-07-09 | Johnny Speeds   | W   | 1.000      | 0.333        | 0.162 (0.054)    | 0.852 (0.284)    | 0 (0.000) |    29.05 | adeX, lauNX, NBK-, Nivera, reiko |
|           13 |      233 | 2024-07-08 | Enterprise      | L   | 1.000      | -            | -                | -                | -         |   -10.43 | adeX, lauNX, NBK-, Nivera, reiko |
|           12 |      235 | 2024-07-08 | lajtbitexe      | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.124 (0.041)    | 0 (0.000) |    10.72 | adeX, lauNX, NBK-, Nivera, reiko |
|           11 |      240 | 2024-07-07 | kONO            | W   | 1.000      | 0.333        | 0.042 (0.014)    | 0.595 (0.198)    | 0 (0.000) |    18.68 | adeX, lauNX, NBK-, Nivera, reiko |
|           10 |      243 | 2024-07-06 | 777             | W   | 1.000      | 0.333        | 0.024 (0.008)    | 0.224 (0.075)    | 0 (0.000) |    11.68 | adeX, lauNX, NBK-, Nivera, reiko |
|            9 |      248 | 2024-07-05 | lajtbitexe      | L   | 1.000      | -            | -                | -                | -         |   -19.88 | adeX, lauNX, NBK-, Nivera, reiko |
|            8 |      279 | 2024-06-27 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.09 | adeX, lauNX, NBK-, Nivera, reiko |
|            7 |      282 | 2024-06-26 | lajtbitexe      | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.124 (0.041)    | 0 (0.000) |    11.19 | adeX, lauNX, NBK-, Nivera, reiko |
|            6 |      283 | 2024-06-25 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.01 | adeX, lauNX, NBK-, Nivera, reiko |
|            5 |      291 | 2024-06-23 | Heimo           | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.058 (0.019)    | 0 (0.000) |     9.60 | adeX, lauNX, NBK-, Nivera, reiko |
|            4 |      314 | 2024-06-16 | CYBERSHOKE      | L   | 0.994      | -            | -                | -                | -         |   -13.96 | adeX, lauNX, NBK-, Nivera, reiko |
|            3 |      343 | 2024-06-15 | Verdant         | W   | 0.988      | 0.143        | 0.013 (0.002)    | 0.316 (0.045)    | 0 (0.000) |    15.89 | adeX, lauNX, NBK-, Nivera, reiko |
|            2 |      400 | 2024-06-14 | Astralis Talent | W   | 0.979      | 0.143        | 0.008 (0.001)    | 0.038 (0.005)    | 0 (0.000) |     6.71 | adeX, lauNX, NBK-, Nivera, reiko |
|            1 |      428 | 2024-06-13 | Verdant         | L   | 0.973      | -            | -                | -                | -         |   -13.78 | adeX, lauNX, NBK-, Nivera, reiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,000.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-09 |      1.000 | $6,000.00      | $6,000.00       |
| 2024-06-27 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
