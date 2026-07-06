### Roster Details<br />
Team Name: Ding Cuts<br />
Roster: biebs, blood, delkud, maxed, Val<br />
Global Rank: [294](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  595.8<br />
<br />
Final Rank Value (595.8) = Starting Rank Value (627.1) + Head To Head Adjustments (-31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.1
- 400 + ( ( 0.121 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 627.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      371 | 2026-06-12 | DXA          | L   | 1.000      | -            | -                | -                | -         |   -15.47 | biebs, delkud, Kiyo, maxed, Val       |
|           15 |      398 | 2026-06-11 | Ground Zero  | L   | 1.000      | -            | -                | -                | -         |    -8.05 | biebs, delkud, Kiyo, maxed, Val       |
|           14 |      412 | 2026-06-10 | DXA          | W   | 1.000      | 0.306        | 0.002 (0.001)    | 0.157 (0.048)    | 0 (0.000) |    15.34 | biebs, delkud, Kiyo, maxed, Val       |
|           13 |     1711 | 2026-04-30 | Abyssal      | L   | 0.752      | -            | -                | -                | -         |    -8.35 | biebs, blood, delkud, maxed, Val      |
|           12 |     1757 | 2026-04-29 | low cortisol | W   | 0.745      | 0.278        | 0.000 (0.000)    | 0.054 (0.011)    | 0 (0.000) |     6.16 | biebs, blood, delkud, maxed, Val      |
|           11 |     1842 | 2026-04-27 | Abyssal      | L   | 0.732      | -            | -                | -                | -         |    -8.38 | biebs, blood, delkud, maxed, Val      |
|           10 |     2153 | 2026-04-18 | Abyssal      | L   | 0.677      | -            | -                | -                | -         |    -8.62 | biebs, blood, delkud, maxed, Val      |
|            9 |     2171 | 2026-04-17 | Rooster      | L   | 0.671      | -            | -                | -                | -         |    -6.33 | biebs, blood, delkud, maxed, Val      |
|            8 |     2174 | 2026-04-17 | DXA          | W   | 0.670      | 0.305        | 0.002 (0.000)    | 0.157 (0.032)    | 0 (0.000) |    10.65 | biebs, blood, delkud, maxed, Val      |
|            7 |     2273 | 2026-04-11 | Rooster      | W   | 0.631      | 0.305        | 0.009 (0.002)    | 0.394 (0.076)    | 0 (0.000) |    14.27 | biebs, blood, delkud, maxed, Val      |
|            6 |     2276 | 2026-04-11 | Time Waves   | W   | 0.630      | 0.305        | 0.000 (0.000)    | 0.065 (0.012)    | 0 (0.000) |     5.01 | biebs, blood, delkud, maxed, Val      |
|            5 |     2756 | 2026-04-02 | BBBMBCBS     | L   | 0.566      | -            | -                | -                | -         |   -12.31 | blood, delkud, maxed, Val, Winnieeeee |
|            4 |     2757 | 2026-04-02 | Ground Zero  | L   | 0.566      | -            | -                | -                | -         |    -5.61 | blood, delkud, maxed, Val, Winnieeeee |
|            3 |     4950 | 2026-02-21 | Skele        | L   | 0.299      | -            | -                | -                | -         |    -5.93 | biebs, delkud, luffy, R3XY, Val       |
|            2 |     5013 | 2026-02-19 | JFT          | W   | 0.291      | 0.317        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.04 | biebs, delkud, luffy, R3XY, Val       |
|            1 |     5113 | 2026-02-18 | Skele        | L   | 0.278      | -            | -                | -                | -         |    -5.76 | biebs, delkud, luffy, R3XY, Val       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($477.11)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.679 | $703.00        | $477.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
