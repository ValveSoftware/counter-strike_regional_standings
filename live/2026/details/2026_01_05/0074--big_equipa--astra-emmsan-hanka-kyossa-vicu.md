### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: ASTRA, Emmsan, Hanka, kyossa, vicu<br />
Global Rank: [74](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [52]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1072.5<br />
<br />
Final Rank Value (1072.5) = Starting Rank Value (1095.2) + Head To Head Adjustments (-22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.567[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.405[<sup>2</sup>](#table1)

The average of these factors is 0.350<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1095.2
- 400 + ( ( 0.350 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1095.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      471 | 2025-11-30 | MIBR fe            | W   | 0.960      | 0.605        | 0.129 (0.075)    | 0.280 (0.163)    | 1 (0.960) |    16.07 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           15 |      481 | 2025-11-30 | NIP Impact         | W   | 0.959      | 0.605        | 0.059 (0.034)    | 0.277 (0.161)    | 1 (0.959) |     7.26 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           14 |      517 | 2025-11-29 | Let Her Cook       | W   | 0.953      | 0.605        | 0.041 (0.024)    | 0.118 (0.068)    | 1 (0.953) |     5.26 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           13 |      534 | 2025-11-29 | FlyQuest RED       | W   | 0.952      | 0.605        | 0.018 (0.010)    | 0.272 (0.157)    | 1 (0.952) |     4.73 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           12 |      562 | 2025-11-28 | Sakura             | L   | 0.945      | -            | -                | -                | -         |   -24.61 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           11 |      865 | 2025-11-15 | Imperial Valkyries | L   | 0.860      | -            | -                | -                | -         |   -21.91 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|           10 |     1034 | 2025-11-09 | Fingers Crossed fe | W   | 0.820      | 0.307        | 0.001 (0.000)    | 0.126 (0.032)    | 0 (0.000) |     2.50 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            9 |     1070 | 2025-11-08 | confidence         | W   | 0.814      | 0.307        | -                | 0.033 (0.008)    | 0 (0.000) |     1.79 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            8 |     1138 | 2025-11-07 | NoKami             | W   | 0.807      | -            | -                | -                | 0 (0.000) |     1.00 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            7 |     1246 | 2025-11-05 | Nemesis Impact     | L   | 0.794      | -            | -                | -                | -         |   -22.79 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            6 |     1657 | 2025-10-24 | Peekaboo           | W   | 0.714      | 0.523        | 0.002 (0.001)    | 0.080 (0.030)    | 0 (0.000) |     1.79 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            5 |     1862 | 2025-10-16 | Fingers Crossed fe | W   | 0.661      | 0.523        | 0.001 (0.000)    | 0.126 (0.044)    | 0 (0.000) |     1.65 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            4 |     2119 | 2025-10-08 | Imperial Valkyries | W   | 0.608      | 0.523        | 0.028 (0.009)    | 0.216 (0.069)    | 0 (0.000) |     2.54 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            3 |     2757 | 2025-09-24 | amateurs           | W   | 0.514      | 0.523        | 0.002 (0.001)    | -                | -         |     0.66 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            2 |     3235 | 2025-09-10 | Nemesis Impact     | W   | 0.421      | 0.523        | 0.003 (0.001)    | 0.056 (0.012)    | -         |     1.25 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            1 |     3815 | 2025-08-17 | MASONIC NexGen     | W   | 0.260      | -            | -                | -                | -         |     0.16 | ASTRA, Emmsan, Hanka, kyossa, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,736.12)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.960 | $75,000.00     | $72,015.30      |
| 2025-11-15 |      0.860 | $2,000.00      | $1,720.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
