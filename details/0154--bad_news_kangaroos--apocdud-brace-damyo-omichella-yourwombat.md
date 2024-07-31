### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: apocdud, BRACE, damyo, Omichella, yourwombat<br />
Global Rank: [154](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
<br />
Final Rank Value:  697.0<br />
<br />
Final Rank Value (697.0) = Starting Rank Value (678.6) + Head To Head Adjustments (18.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.280[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 678.6
- 400 + ( ( 0.135 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 678.6


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
|           12 |      294 | 2024-07-23 | MANTRA    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.71 | apocdud, BRACE, damyo, Omichella, yourwombat |
|           11 |      299 | 2024-07-23 | MANTRA    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.93 | apocdud, BRACE, damyo, Omichella, yourwombat |
|           10 |      474 | 2024-07-18 | Arcade    | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.139 (0.046)    | 0 (0.000) |    13.63 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            9 |      481 | 2024-07-18 | Arcade    | L   | 1.000      | -            | -                | -                | -         |   -18.06 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            8 |      597 | 2024-07-16 | DXA       | L   | 1.000      | -            | -                | -                | -         |   -18.18 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            7 |      600 | 2024-07-16 | DXA       | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.228 (0.076)    | 0 (0.000) |    13.11 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            6 |     1222 | 2024-06-07 | Mindfreak | L   | 0.837      | -            | -                | -                | -         |   -12.02 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            5 |     1291 | 2024-06-06 | Rooster   | L   | 0.830      | -            | -                | -                | -         |    -8.70 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            4 |     1695 | 2024-05-22 | KZG       | W   | 0.730      | 0.333        | 0.006 (0.001)    | 0.113 (0.028)    | 0 (0.000) |    10.05 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            3 |     1700 | 2024-05-22 | KZG       | W   | 0.730      | 0.333        | 0.006 (0.001)    | 0.113 (0.028)    | 0 (0.000) |    10.72 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            2 |     1956 | 2024-05-15 | Arcade    | W   | 0.684      | 0.333        | 0.003 (0.001)    | 0.139 (0.032)    | 0 (0.000) |     8.86 | ADDICT, BRACE, damyo, hazr, yourwombat       |
|            1 |     1959 | 2024-05-15 | Arcade    | W   | 0.683      | 0.333        | 0.003 (0.001)    | 0.139 (0.032)    | 0 (0.000) |     9.39 | ADDICT, BRACE, damyo, hazr, yourwombat       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($892.60)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
