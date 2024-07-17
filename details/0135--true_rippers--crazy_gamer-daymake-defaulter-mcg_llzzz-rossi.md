### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [135](../standings_global.md)<br />
Regional Rank: [10]( ../standings_asia.md)<br />
Final Rank Value:  782.3<br />
<br />
Final Rank Value (782.3) = Starting Rank Value (747.4) + Head To Head Adjustments (34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.4
- 400 + ( ( 0.162 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 747.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      259 | 2024-06-30 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |   -13.10 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           14 |      260 | 2024-06-29 | Marcos     | W   | 1.000      | 0.262        | 0.000 (0.000)    | 0.041 (0.011)    | 0 (0.000) |     5.07 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           13 |      265 | 2024-06-29 | Gods Reign | W   | 1.000      | 0.143        | 0.065 (0.009)    | 0.277 (0.040)    | 0 (0.000) |    18.76 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           12 |      271 | 2024-06-28 | Marcos     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     5.92 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           11 |      277 | 2024-06-27 | Gods Reign | W   | 1.000      | 0.143        | 0.065 (0.009)    | 0.277 (0.040)    | 0 (0.000) |    20.32 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           10 |     1073 | 2024-05-26 | Gods Reign | L   | 0.852      | -            | -                | -                | -         |    -9.20 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            9 |     1076 | 2024-05-26 | Carnival   | W   | 0.851      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.98 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            8 |     1805 | 2024-04-29 | Carnival   | W   | 0.671      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.96 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            7 |     2589 | 2024-03-31 | Gods Reign | L   | 0.479      | -            | -                | -                | -         |    -5.29 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            6 |     2595 | 2024-03-30 | Marcos     | W   | 0.472      | 0.143        | 0.001 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     5.42 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            5 |     2603 | 2024-03-29 | Grayfox    | W   | 0.466      | 0.143        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     4.80 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            4 |     2698 | 2024-03-24 | Marcos     | L   | 0.431      | -            | -                | -                | -         |    -8.61 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            3 |     3652 | 2024-02-11 | Marcos     | L   | 0.152      | -            | -                | -                | -         |    -2.48 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            2 |     3667 | 2024-02-09 | Marcos     | W   | 0.144      | 0.435        | 0.012 (0.001)    | 0.018 (0.001)    | 1 (0.144) |     2.19 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            1 |     4033 | 2024-01-21 | Grayfox    | W   | 0.012      | 0.262        | 0.001 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.12 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,427.47)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $500.00        | $500.00         |
| 2024-05-26 |      0.852 | $500.00        | $425.80         |
| 2024-04-29 |      0.671 | $1,000.00      | $671.27         |
| 2024-02-11 |      0.152 | $12,000.00     | $1,818.72       |
| 2024-01-21 |      0.012 | $1,000.00      | $11.67          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
