### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: Aceari, hasteka, ROUX, sk0R, yAmi<br />
Global Rank: [263](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  613.5<br />
<br />
Final Rank Value (613.5) = Starting Rank Value (612.4) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.4
- 400 + ( ( 0.113 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 612.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2838 | 2026-08-29 | Just Swing    | L   | 0.766      | -            | -                | -                | -         |    -8.63 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|           12 |     2884 | 2026-08-28 | NEXVOID       | L   | 0.760      | -            | -                | -                | -         |    -0.56 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|           11 |     2982 | 2026-08-26 | XDM           | W   | 0.746      | 0.333        | 0.001 (0.000)    | 0.080 (0.020)    | 0 (0.000) |    13.47 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|           10 |     3025 | 2026-08-25 | Haunted House | W   | 0.739      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.54 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            9 |     3069 | 2026-08-24 | NEXVOID       | L   | 0.732      | -            | -                | -                | -         |    -0.50 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            8 |     3098 | 2026-08-22 | The Huns      | L   | 0.724      | -            | -                | -                | -         |    -1.22 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            7 |     3121 | 2026-08-22 | Vitalem Aerem | L   | 0.717      | -            | -                | -                | -         |    -7.76 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            6 |     3972 | 2026-07-24 | 5star         | L   | 0.525      | -            | -                | -                | -         |    -0.45 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|            5 |     3999 | 2026-07-23 | The Huns      | L   | 0.519      | -            | -                | -                | -         |    -0.85 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|            4 |     5715 | 2026-05-13 | 5star         | L   | 0.045      | -            | -                | -                | -         |    -0.04 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            3 |     5726 | 2026-05-12 | Ground Zero   | W   | 0.043      | 0.548        | 0.009 (0.000)    | 0.234 (0.006)    | 1 (0.043) |     1.17 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            2 |     5766 | 2026-05-11 | JiJieHao      | L   | 0.037      | -            | -                | -                | -         |    -0.01 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            1 |     5803 | 2026-05-11 | NEXVOID       | W   | 0.031      | 0.548        | 0.043 (0.001)    | 0.614 (0.010)    | 1 (0.031) |     0.94 | Efire, hasteka, ROUX, tikuak, yAmi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($365.53)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-25 |      0.532 | $279.00        | $148.32         |
| 2026-05-17 |      0.072 | $3,000.00      | $217.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
