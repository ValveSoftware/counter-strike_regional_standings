### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: apocdud, BRACE, damyo, Omichella, yourwombat<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [153](../standings_global.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
Final Rank Value:  702.2<br />
<br />
Final Rank Value (702.2) = Starting Rank Value (682.7) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.7
- 400 + ( ( 0.140 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 682.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       52 | 2024-07-23 | MANTRA    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.61 | apocdud, BRACE, damyo, Omichella, yourwombat |
|           11 |       57 | 2024-07-23 | MANTRA    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.82 | apocdud, BRACE, damyo, Omichella, yourwombat |
|           10 |      232 | 2024-07-18 | Arcade    | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.159 (0.053)    | 0 (0.000) |    13.58 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            9 |      239 | 2024-07-18 | Arcade    | L   | 1.000      | -            | -                | -                | -         |   -18.13 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            8 |      355 | 2024-07-16 | DXA       | L   | 1.000      | -            | -                | -                | -         |   -18.35 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            7 |      358 | 2024-07-16 | DXA       | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.217 (0.072)    | 0 (0.000) |    12.93 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            6 |      980 | 2024-06-07 | Mindfreak | L   | 0.884      | -            | -                | -                | -         |   -12.40 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            5 |     1049 | 2024-06-06 | Rooster   | L   | 0.877      | -            | -                | -                | -         |    -8.86 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            4 |     1453 | 2024-05-22 | KZG       | W   | 0.778      | 0.333        | 0.007 (0.002)    | 0.130 (0.034)    | 0 (0.000) |    10.51 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            3 |     1458 | 2024-05-22 | KZG       | W   | 0.777      | 0.333        | 0.007 (0.002)    | 0.130 (0.034)    | 0 (0.000) |    11.25 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            2 |     1714 | 2024-05-15 | Arcade    | W   | 0.731      | 0.333        | 0.004 (0.001)    | 0.159 (0.039)    | 0 (0.000) |     9.44 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            1 |     1717 | 2024-05-15 | Arcade    | W   | 0.731      | 0.333        | 0.004 (0.001)    | 0.159 (0.039)    | 0 (0.000) |    10.05 | ADDICT, BRACE, damyo, hazr, yourwombat       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($942.26)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
