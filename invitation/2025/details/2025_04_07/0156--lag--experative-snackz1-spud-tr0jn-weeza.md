### Roster Details<br />
Team Name: LAG<br />
Roster: Experative, SnacKZ1, spud, TR0JN, Weeza<br />
Global Rank: [156](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [40]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  651.4<br />
<br />
Final Rank Value (651.4) = Starting Rank Value (734.6) + Head To Head Adjustments (-83.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 734.6
- 400 + ( ( 0.182 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 734.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      266 | 2025-03-27 | Fisher College     | L   | 1.000      | -            | -                | -                | -         |   -14.21 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|           14 |      285 | 2025-03-27 | Straight2Killin    | L   | 1.000      | -            | -                | -                | -         |   -23.42 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|           13 |      649 | 2025-03-08 | Nouns              | L   | 1.000      | -            | -                | -                | -         |   -11.97 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|           12 |      717 | 2025-03-07 | Getting Info       | L   | 0.995      | -            | -                | -                | -         |   -23.58 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|           11 |      778 | 2025-03-06 | Marca Registrada   | W   | 0.989      | 0.143        | 0.012 (0.002)    | 0.214 (0.030)    | 0 (0.000) |    14.25 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|           10 |      813 | 2025-03-05 | Straight2Killin    | W   | 0.983      | 0.143        | 0.000 (0.000)    | 0.054 (0.008)    | 0 (0.000) |     6.94 | Experative, SnacKZ1, spud, TR0JN, Weeza |
|            9 |      886 | 2025-03-02 | BLUEJAYS           | L   | 0.961      | -            | -                | -                | -         |    -5.80 | Experative, niise, spud, TR0JN, Weeza   |
|            8 |      904 | 2025-03-01 | Supernova Comets   | W   | 0.956      | 0.333        | 0.006 (0.002)    | 0.093 (0.030)    | 1 (0.956) |    14.73 | Experative, niise, spud, TR0JN, Weeza   |
|            7 |      910 | 2025-03-01 | Revel              | W   | 0.955      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.955) |     4.86 | Experative, niise, spud, TR0JN, Weeza   |
|            6 |     1350 | 2025-02-09 | MIGHT              | L   | 0.822      | -            | -                | -                | -         |   -12.00 | alula, Experative, spud, TR0JN, Weeza   |
|            5 |     1389 | 2025-02-08 | Chicken Coop       | L   | 0.815      | -            | -                | -                | -         |   -15.85 | alula, Experative, spud, TR0JN, Weeza   |
|            4 |     1831 | 2024-12-14 | SUPER EVIL GANG    | L   | 0.443      | -            | -                | -                | -         |    -8.11 | Experative, Nyyx, rayxts, TR0JN, Weeza  |
|            3 |     1860 | 2024-12-13 | Bad News Capybaras | L   | 0.437      | -            | -                | -                | -         |    -9.08 | Experative, nicx, rayxts, TR0JN, Weeza  |
|            2 |     3196 | 2024-10-09 | Bad News Capybaras | W   | 0.003      | 0.477        | 0.000 (0.000)    | 0.174 (0.000)    | 0 (0.000) |     0.03 | Experative, nicx, rayxts, TR0JN, Weeza  |
|            1 |     3201 | 2024-10-09 | Bad News Capybaras | L   | 0.003      | -            | -                | -                | -         |    -0.06 | Experative, nicx, rayxts, TR0JN, Weeza  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,023.82)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-02 |      0.963 | $1,000.00      | $963.11         |
| 2024-10-20 |      0.076 | $800.00        | $60.71          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
