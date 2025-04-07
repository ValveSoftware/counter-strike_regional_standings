### Roster Details<br />
Team Name: ex-TALON<br />
Roster: ADDICT, BRACE, hazr, sterling, vision<br />
Global Rank: [58](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  893.9<br />
<br />
Final Rank Value (893.9) = Starting Rank Value (898.9) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.427[<sup>2</sup>](#table1)

The average of these factors is 0.271<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.9
- 400 + ( ( 0.271 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 898.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      126 | 2025-03-30 | Rooster       | L   | 1.000      | -            | -                | -                | -         |   -19.84 | ADDICT, BRACE, hazr, sterling, vision |
|           12 |      181 | 2025-03-29 | MANTRA        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.204 (0.029)    | 0 (0.000) |     4.34 | ADDICT, BRACE, hazr, sterling, vision |
|           11 |      188 | 2025-03-28 | Housebets     | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.254 (0.036)    | 0 (0.000) |     8.47 | ADDICT, BRACE, hazr, sterling, vision |
|           10 |      251 | 2025-03-28 | Only One Word | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.154 (0.022)    | 0 (0.000) |     4.77 | ADDICT, BRACE, hazr, sterling, vision |
|            9 |      316 | 2025-03-27 | SemperFi      | L   | 1.000      | -            | -                | -                | -         |   -12.72 | ADDICT, BRACE, hazr, sterling, vision |
|            8 |      357 | 2025-03-23 | SemperFi      | L   | 1.000      | -            | -                | -                | -         |   -13.86 | ADDICT, hazr, malta, nettik, sterling |
|            7 |      384 | 2025-03-22 | Rooster       | W   | 1.000      | 0.345        | 0.007 (0.002)    | 0.402 (0.139)    | 1 (1.000) |    10.87 | ADDICT, hazr, malta, nettik, sterling |
|            6 |      385 | 2025-03-22 | SemperFi      | W   | 1.000      | 0.345        | 0.023 (0.008)    | 0.455 (0.157)    | 1 (1.000) |    17.53 | ADDICT, hazr, malta, nettik, sterling |
|            5 |      395 | 2025-03-21 | Mindfreak     | W   | 1.000      | 0.345        | 0.011 (0.004)    | 0.073 (0.025)    | 1 (1.000) |     6.30 | ADDICT, hazr, malta, nettik, sterling |
|            4 |      398 | 2025-03-21 | Housebets     | L   | 1.000      | -            | -                | -                | -         |   -22.16 | ADDICT, hazr, malta, nettik, sterling |
|            3 |      400 | 2025-03-20 | Vantage       | W   | 1.000      | 0.345        | 0.000 (0.000)    | 0.195 (0.067)    | 1 (1.000) |     3.72 | ADDICT, hazr, malta, nettik, sterling |
|            2 |      999 | 2025-02-24 | Vantage       | W   | 0.924      | 0.143        | 0.000 (0.000)    | 0.195 (0.026)    | 0 (0.000) |     3.80 | ADDICT, hazr, malta, nettik, sterling |
|            1 |     1024 | 2025-02-23 | MANTRA        | W   | 0.917      | 0.143        | 0.000 (0.000)    | 0.204 (0.027)    | 0 (0.000) |     3.73 | ADDICT, hazr, malta, nettik, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,135.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      1.000 | $3,135.00      | $3,135.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
