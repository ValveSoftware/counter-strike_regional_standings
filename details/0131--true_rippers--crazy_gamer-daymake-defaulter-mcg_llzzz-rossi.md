### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [131](../standings_global.md)<br />
Regional Rank: [11]( ../standings_asia.md)<br />
Final Rank Value:  782.8<br />
<br />
Final Rank Value (782.8) = Starting Rank Value (747.4) + Head To Head Adjustments (35.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.4
- 400 + ( ( 0.165 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 747.4


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
|           15 |       95 | 2024-06-30 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |   -12.98 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           14 |       96 | 2024-06-29 | Marcos     | W   | 1.000      | 0.262        | 0.000 (0.000)    | 0.041 (0.011)    | 0 (0.000) |     5.03 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           13 |      101 | 2024-06-29 | Gods Reign | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.284 (0.041)    | 0 (0.000) |    18.89 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           12 |      107 | 2024-06-28 | Marcos     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     5.87 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           11 |      113 | 2024-06-27 | Gods Reign | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.284 (0.041)    | 0 (0.000) |    20.45 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|           10 |      909 | 2024-05-26 | Gods Reign | L   | 0.891      | -            | -                | -                | -         |    -9.51 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            9 |      912 | 2024-05-26 | Carnival   | W   | 0.890      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.16 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            8 |     1641 | 2024-04-29 | Carnival   | W   | 0.711      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.18 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            7 |     2425 | 2024-03-31 | Gods Reign | L   | 0.519      | -            | -                | -                | -         |    -5.67 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            6 |     2431 | 2024-03-30 | Marcos     | W   | 0.511      | 0.143        | 0.001 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     5.83 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            5 |     2439 | 2024-03-29 | Grayfox    | W   | 0.505      | 0.143        | 0.001 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     5.20 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            4 |     2534 | 2024-03-24 | Marcos     | L   | 0.470      | -            | -                | -                | -         |    -9.43 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            3 |     3488 | 2024-02-11 | Marcos     | L   | 0.191      | -            | -                | -                | -         |    -3.03 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            2 |     3503 | 2024-02-09 | Marcos     | W   | 0.184      | 0.435        | 0.015 (0.001)    | 0.023 (0.002)    | 1 (0.184) |     2.89 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            1 |     3869 | 2024-01-21 | Grayfox    | W   | 0.051      | 0.262        | 0.001 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.52 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,001.82)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-30 |      1.000 | $500.00        | $500.00         |
| 2024-05-26 |      0.891 | $500.00        | $445.61         |
| 2024-04-29 |      0.711 | $1,000.00      | $710.88         |
| 2024-02-11 |      0.191 | $12,000.00     | $2,294.04       |
| 2024-01-21 |      0.051 | $1,000.00      | $51.28          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
