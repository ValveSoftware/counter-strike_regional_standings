### Roster Details<br />
Team Name: Prototype Blaze<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL<br />
Global Rank: [117](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  693.5<br />
<br />
Final Rank Value (693.5) = Starting Rank Value (649.6) + Head To Head Adjustments (43.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.6
- 400 + ( ( 0.138 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 649.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      358 | 2025-04-12 | Eco Warriors       | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.214 (0.031)    | 0 (0.000) |    15.07 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|           12 |      373 | 2025-04-11 | DMS                | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.135 (0.019)    | 0 (0.000) |     8.90 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|           11 |      516 | 2025-04-03 | Spray and Slay     | W   | 0.988      | 0.143        | 0.003 (0.000)    | 0.070 (0.010)    | 0 (0.000) |    12.58 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|           10 |      976 | 2025-03-20 | Let Her Cook       | W   | 0.894      | 0.143        | 0.004 (0.001)    | 0.100 (0.013)    | 0 (0.000) |    11.88 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            9 |     1416 | 2025-03-06 | CS2News Ladies     | W   | 0.801      | 0.143        | 0.003 (0.000)    | 0.077 (0.009)    | 0 (0.000) |     8.60 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            8 |     1590 | 2025-02-27 | Imperial Valkyries | L   | 0.754      | -            | -                | -                | -         |    -8.59 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            7 |     2243 | 2025-02-02 | Permitta W         | W   | 0.587      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.70 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            6 |     2254 | 2025-02-01 | Eco Warriors       | L   | 0.581      | -            | -                | -                | -         |    -9.37 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            5 |     3213 | 2024-11-14 | NAVI Javelins      | L   | 0.054      | -            | -                | -                | -         |    -0.81 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            4 |     3242 | 2024-11-14 | Portugal fe        | W   | 0.052      | 0.557        | 0.003 (0.000)    | 0.005 (0.000)    | 1 (0.052) |     0.73 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            3 |     3269 | 2024-11-13 | Denmark fe         | W   | 0.045      | 0.557        | 0.001 (0.000)    | 0.004 (0.000)    | 1 (0.045) |     0.45 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            2 |     3324 | 2024-11-11 | Sweden fe          | W   | 0.034      | 0.557        | 0.001 (0.000)    | 0.002 (0.000)    | 1 (0.034) |     0.34 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |
|            1 |     3330 | 2024-11-11 | Messitas           | W   | 0.033      | 0.557        | 0.003 (0.000)    | 0.044 (0.001)    | 1 (0.033) |     0.46 | ASTRA, Emerald, Kaoday, Monkey D Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,172.02)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.054 | $40,000.00     | $2,172.02       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
