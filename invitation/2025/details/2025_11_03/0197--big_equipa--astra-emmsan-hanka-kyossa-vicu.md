### Roster Details<br />
Team Name: BIG EQUIPA<br />
Roster: ASTRA, Emmsan, Hanka, kyossa, vicu<br />
Global Rank: [197](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [116]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  603.3<br />
<br />
Final Rank Value (603.3) = Starting Rank Value (517.0) + Head To Head Adjustments (86.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.0
- 400 + ( ( 0.062 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 517.0


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
|            6 |      163 | 2025-10-24 | Peekaboo           | W   | 1.000      | 0.338        | 0.002 (0.001)    | 0.144 (0.049)    | 0 (0.000) |    18.11 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            5 |      289 | 2025-10-16 | Overpeek           | W   | 1.000      | 0.338        | 0.000 (0.000)    | 0.179 (0.061)    | 0 (0.000) |    13.92 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            4 |      538 | 2025-10-08 | Imperial Valkyries | W   | 1.000      | 0.338        | 0.005 (0.002)    | 0.190 (0.064)    | 0 (0.000) |    16.78 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            3 |     1176 | 2025-09-24 | shinigami          | W   | 0.934      | 0.338        | 0.002 (0.001)    | 0.029 (0.009)    | 0 (0.000) |    13.38 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            2 |     1654 | 2025-09-10 | Nemesis Impact     | W   | 0.841      | 0.338        | 0.005 (0.001)    | 0.044 (0.013)    | 0 (0.000) |    16.83 | ASTRA, Emmsan, Hanka, kyossa, vicu |
|            1 |     2234 | 2025-08-17 | MASONIC NexGen     | W   | 0.680      | 0.307        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.19 | ASTRA, Emmsan, Hanka, kyossa, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
