### Roster Details<br />
Team Name: True Rippers<br />
Roster: Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [146](../standings_global.md)<br />
Regional Rank: [12]( ../standings_asia.md)<br />
Final Rank Value:  726.9<br />
<br />
Final Rank Value (726.9) = Starting Rank Value (721.7) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 721.7
- 400 + ( ( 0.158 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 721.7


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
|           10 |      775 | 2024-05-26 | Gods Reign | L   | 1.000      | -            | -                | -                | -         |    -9.68 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            9 |      778 | 2024-05-26 | Carnival   | W   | 1.000      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.22 | Crazy_Gamer, DayMake, DEFAULTER, Mcg!LLzZz, Rossi  |
|            8 |     1507 | 2024-04-29 | Carnival   | W   | 0.867      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.67 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            7 |     2292 | 2024-03-31 | Gods Reign | L   | 0.674      | -            | -                | -                | -         |    -6.67 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            6 |     2298 | 2024-03-30 | Marcos     | W   | 0.667      | 0.143        | 0.001 (0.000)    | 0.022 (0.002)    | 0 (0.000) |     8.10 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            5 |     2306 | 2024-03-29 | Grayfox    | W   | 0.661      | 0.143        | 0.001 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     7.38 | Crazy_Gamer, DEFAULTER, Gh0sTTTT, Mcg!LLzZz, Rossi |
|            4 |     2401 | 2024-03-24 | Marcos     | L   | 0.626      | -            | -                | -                | -         |   -11.96 | Anasasis, Crazy_Gamer, DEFAULTER, Mcg!LLzZz, Rossi |
|            3 |     3355 | 2024-02-11 | Marcos     | L   | 0.347      | -            | -                | -                | -         |    -4.55 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            2 |     3370 | 2024-02-09 | Marcos     | W   | 0.339      | 0.435        | 0.023 (0.003)    | 0.036 (0.005)    | 1 (0.339) |     6.31 | DEFAULTER, Gh0sTTTT, kennyS, Mcg!LLzZz, Rossi      |
|            1 |     3736 | 2024-01-21 | Grayfox    | W   | 0.207      | 0.262        | 0.001 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.32 | DEFAULTER, DiceDealer, Gh0sTTTT, Mcg!LLzZz, Rossi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,735.63)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-26 |      1.000 | $500.00        | $500.00         |
| 2024-04-29 |      0.867 | $1,000.00      | $866.56         |
| 2024-02-11 |      0.347 | $12,000.00     | $4,162.12       |
| 2024-01-21 |      0.207 | $1,000.00      | $206.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
