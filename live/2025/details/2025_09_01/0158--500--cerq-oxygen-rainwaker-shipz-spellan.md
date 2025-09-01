### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN<br />
Global Rank: [158](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [92]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  660.2<br />
<br />
Final Rank Value (660.2) = Starting Rank Value (655.2) + Head To Head Adjustments (5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.2
- 400 + ( ( 0.133 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 655.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2640 | 2025-04-15 | GamerLegion   | L   | 0.271      | -            | -                | -                | -         |    -0.10 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           13 |     2652 | 2025-04-14 | BIG           | L   | 0.266      | -            | -                | -                | -         |    -0.58 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           12 |     2661 | 2025-04-14 | ENCE          | L   | 0.265      | -            | -                | -                | -         |    -0.19 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           11 |     3607 | 2025-03-16 | OG            | L   | 0.074      | -            | -                | -                | -         |    -0.16 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|           10 |     3615 | 2025-03-16 | ENCE          | W   | 0.072      | 0.435        | 0.151 (0.005)    | 1.000 (0.031)    | 0 (0.000) |     2.23 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            9 |     3647 | 2025-03-15 | FUT           | W   | 0.065      | 0.435        | 0.221 (0.006)    | 0.726 (0.021)    | 0 (0.000) |     1.80 | CeRq, oxygeN, POP0V, Rainwaker, SPELLAN |
|            8 |     3677 | 2025-03-13 | ECLOT         | W   | 0.053      | 0.435        | 0.058 (0.001)    | 0.528 (0.012)    | 0 (0.000) |     1.32 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            7 |     3745 | 2025-03-10 | Monte         | W   | 0.034      | 0.435        | 0.003 (0.000)    | 0.051 (0.001)    | 0 (0.000) |     0.56 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            6 |     3788 | 2025-03-09 | Passion UA    | L   | 0.028      | -            | -                | -                | -         |    -0.05 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            5 |     3819 | 2025-03-09 | Leo           | L   | 0.025      | -            | -                | -                | -         |    -0.49 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            4 |     3855 | 2025-03-08 | Zero Tenacity | L   | 0.021      | -            | -                | -                | -         |    -0.15 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            3 |     3887 | 2025-03-08 | Nexus         | W   | 0.019      | 0.769        | 0.055 (0.001)    | 0.778 (0.012)    | 0 (0.000) |     0.52 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            2 |     3946 | 2025-03-07 | fnatic        | L   | 0.013      | -            | -                | -                | -         |    -0.01 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |
|            1 |     3985 | 2025-03-06 | Betclic       | W   | 0.008      | 0.435        | 0.027 (0.000)    | 0.588 (0.002)    | 0 (0.000) |     0.24 | CeRq, oxygeN, Rainwaker, SHiPZ, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($741.58)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.074 | $10,000.00     | $741.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
